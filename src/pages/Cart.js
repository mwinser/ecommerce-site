import React, {useContext} from "react"
import {Context} from "../Context"
import Item from "../components/Item"

function Cart () {
    const {cartItems, removeFromCart} = useContext(Context)

    function listCartItems(){
        return (
            <ul className="cart-list">
                {cartItems.map(item => (
                <li><Item key={item.id} img={item}/></li>
            ))}
            </ul>

        )
    }

    return(
        <>
            {cartItems.length>0 ? listCartItems() : (<div>Your cart is empty!</div>)}
            <h4>Total: $0.00</h4>
            <button>Purchase Items</button>
        </>
    )
}

export default Cart