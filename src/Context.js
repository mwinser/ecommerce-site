import React, {useState} from "react"
import data from "./flowers"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allItems] = useState(data)
    const [cartItems, setCartItems] = useState([])

    function addToCart(newItem){
        setCartItems(prevCartItems=> [...prevCartItems, newItem])
        
    }
    function removeFromCart(removingItem){
        setCartItems(prevCartItems=> prevCartItems.filter(cartItem=>cartItem.id!==removingItem.id))

    }
    function clearCart(){
        setCartItems([])
    }

    return (
        <Context.Provider value={{allItems, cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}