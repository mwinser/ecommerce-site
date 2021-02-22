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

    function subtotalCost (){
        const subtotal = cartItems.reduce((acc, item)=>acc+item.price,0)
        return (<h2>Total: {subtotal.toLocaleString( 'en-US',{style:'currency', currency: 'USD'}) }</h2>)
    }

    return(
        <>
            {isCartEmpty ? (
                <div>
                    <h1>Your cart is empty!</h1>
                    <button disabled>Purchase Items</button>
                </div>
                ) : (
                <div>
                    {listCartItems()}
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