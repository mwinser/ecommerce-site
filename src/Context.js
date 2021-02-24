import React, {useState} from "react"
import data from "./flowers"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allItems] = useState(data)
    const [cartItems, setCartItems] = useState([])
    const prevRemember = localStorage.getItem('rememberMe')=== "true"
    const prevUser = prevRemember ? localStorage.getItem('user'): null
    const [user, setUser] = useState(prevUser)
    const [rememberMe, setRememberMe] = useState(prevRemember)
    const [showPopUps, setShowPopUps] = useState(true)

    function addToCart(newItem){
        setCartItems(prevCartItems=> [...prevCartItems, newItem])
        
    }
    function removeFromCart(removingItem){
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