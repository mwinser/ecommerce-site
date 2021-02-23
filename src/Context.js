import React, {useState} from "react"
import data from "./flowers"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allItems] = useState(data)
    const [cartItems, setCartItems] = useState([])
    const [user, setUser] = useState(null)

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

    return (
        <Context.Provider value={{allItems, cartItems, user, addToCart, removeFromCart, clearCart, loginUser, logoutUser}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}