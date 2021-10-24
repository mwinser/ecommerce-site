import React, {useState} from "react"
import data from "./flowers"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allItems] = useState(data)
    
    const prevRemember = localStorage.getItem('rememberMe')=== "true"
    const prevUser = prevRemember ? localStorage.getItem('user'): null
    const prevItems = localStorage.getItem('cart') ? allItems.filter(item => localStorage.getItem('cart').split(" ").includes(item.id)) : []
    const [cartItems, setCartItems] = useState(prevItems)
    const [user, setUser] = useState(prevUser)
    const [rememberMe, setRememberMe] = useState(prevRemember)
    const [showPopUps, setShowPopUps] = useState(true)


    function addToCart(newItem){
        localStorage.getItem('cart') 
            ?
                localStorage.setItem('cart', localStorage.getItem('cart') + " " + newItem.id)
            :
                localStorage.setItem('cart', newItem.id)

        setCartItems(prevCartItems=> [...prevCartItems, newItem])
        
    }
    function removeFromCart(removingItem){
        if (localStorage.getItem('cart'))
            localStorage.setItem('cart', 
                localStorage
                    .getItem('cart')
                    .split(" ")
                    .filter(item=>{return item !== removingItem.id})
                    .join(' ')
            )

        setCartItems(prevCartItems=> prevCartItems.filter(cartItem=>cartItem.id!==removingItem.id))

    }
    function clearCart(){
        setCartItems([])
    }

    function loginUser (userName) {
        setUser(userName)
    }
    function logoutUser () {
        setUser(null)
        localStorage.clear()
    }
    function changeRememberMe (bool) {
        setRememberMe(bool)
    }
    function disableShowPopUps () {
        setShowPopUps(false)
    }

    return (
        <Context.Provider value={
            {allItems, 
            cartItems, 
            user, 
            rememberMe, 
            showPopUps, 
            addToCart, 
            removeFromCart, 
            clearCart, 
            loginUser, 
            logoutUser, 
            changeRememberMe,
            disableShowPopUps}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}