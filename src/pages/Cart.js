import React, {useContext} from "react"
import {Context} from "../Context"
import {Link} from "react-router-dom"

function Cart () {
    const {cartItems, clearCart, removeFromCart} = useContext(Context)
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


    function listCartItems(){
        return (
            <ul className="cart-list">
                {cartItems.map(item => (
                <li key={item.id}>
                    <img src={item.img}alt={item.name}></img>
                    <div className="cart-deets">
                        <h2>{item.name}</h2>
                        <h4>{item.price.toLocaleString( 'en-US',{style:'currency', currency: 'USD'})}</h4>
                        <div><Link to={`/browse/${item.id}`}>View Product Details</Link></div>
                        <button onClick={()=>removeFromCart(item)}>Remove</button>
                    </div>
                </li>
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
                    <h1 id="cart-message">Your cart is empty!</h1>
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