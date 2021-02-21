import React, {useContext} from "react"
import {Context} from "../Context"
import Item from "../components/Item"

function Cart () {
    const {cartItems, clearCart} = useContext(Context)
    const isCartEmpty = cartItems.length===0
    function fakePurchase(e) {
        e.target.innerHTML = "Processing..."
        e.target.disabled = true
        setTimeout(()=>{
        e.target.innerHTML = "Purchase Items"
        e.target.disabled = false
        clearCart()
        }, 3000)
        
    }


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
            {isCartEmpty ? (<h1>Your cart is empty!</h1>): listCartItems()}
            <h4>Total: $0.00</h4>
            {isCartEmpty ? (<button disabled>Purchase Items</button>): (<button onClick={e=>fakePurchase(e)}>Purchase Items</button>)}
            
        </>
    )
}

export default Cart