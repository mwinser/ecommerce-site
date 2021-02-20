import React, {useState, useEffect} from "react"
import data from "./flowers"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allItems, setAllItems] = useState(data)
    const [cartItems, setCartItems] = useState([])

    function addToCart(newItem){
        setCartItems(prevCartItems=> [...prevCartItems, newItem])
        
    }
    function removeFromCart(removingItem){
        setCartItems(prevCartItems=> prevCartItems.filter(cartItem=>cartItem.id!==removingItem.id))

    }

    return (
        <Context.Provider value={{allItems, cartItems, addToCart, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}