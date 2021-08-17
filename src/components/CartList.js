import React, {useContext} from "react"
import {Context} from "../Context"
import {Link} from "react-router-dom"

function CartList (props) {
    const {cartItems, removeFromCart} = useContext(Context)
    if (props.type==="full"){
        return (
            <ul className="cart-list">
                {cartItems.map(item => (
                <li key={item.id}>
                    <img src={item.img}alt={item.name}></img>
                    <div className="cart-deets">
                        <h3>{item.name}</h3>
                        <h4>{item.price.toLocaleString( 'en-US',{style:'currency', currency: 'USD'})}</h4>
                        <div><Link to={`/browse/${item.id}`}>View Product Details</Link></div>
                        <button onClick={()=>removeFromCart(item)}>Remove</button>
                    </div>
                </li>
            ))}
            </ul>

        )
    }
    else {
        return (
        <ul>
            {cartItems.map(item=>(
                <li key={item.id}>{item.name} - {item.price}</li>
            ))}
        </ul>
        )
    }
    


}

export default CartList