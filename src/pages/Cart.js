import React, {useContext} from "react"
import {Context} from "../Context"
import CartList from "../components/CartList"

function Cart () {
    const {cartItems, clearCart} = useContext(Context)
    const isCartEmpty = cartItems.length===0


    function fakePurchase(e) {

        e.target.innerHTML = "Processing..."
        e.target.disabled = true
        setTimeout(()=>{
            e.target.innerHTML = "Purchase Items"
            clearCart()
            
            const message = document.getElementById("cart-message")
            message.innerHTML = "Order confirmed!"
            setTimeout(()=>{
                message.innerHTML = "Your cart is empty!"
            },2000)
        }, 3000)
    }


    function subtotalCost (){
        const subtotal = cartItems.reduce((acc, item)=>acc+item.price,0)
        return (<h2>Total: {subtotal.toLocaleString( 'en-US',{style:'currency', currency: 'USD'}) }</h2>)
    }

    return(
        <>
            {isCartEmpty ? (
                <div className="cart-container">
                    <h1 id="cart-message">Your cart is empty!</h1>
                    <button disabled>Purchase Items</button>
                </div>
                ) : (
                <div className="cart-container">
                    <h1 id="cart-message">Your Cart</h1>
                    <CartList type="full"/>
                    <div>
                        {subtotalCost()}
                        <p>Tax and Shipping Included!</p>
                        <button onClick={e=>fakePurchase(e)}>Purchase Items</button>
                    </div>  
                </div>
                )}
            
        </>
    )
}

export default Cart