import React, {useContext} from "react"
import {Context} from "../Context"
import {Link} from "react-router-dom"

function PopOut () {
    const {cartItems} = useContext(Context)

    function sendOffScreen(){
        document
            .getElementsByClassName("popout-container")[0]
            .classList
            .add("offscreen")
    }

    function briefCartList() {
        return (
            <ul>
                {cartItems.map(item=>(
                    <li>{item.name} - {item.price}</li>
                ))}
            </ul>
        )
    }


    return (
    <div className="popout-container offscreen">
        <div className="popout">
            <button onClick={()=>sendOffScreen()}>Exit Window</button>
           {briefCartList()}
            <button><Link to="/cart">Go to Checkout</Link></button>
            
        </div>
    </div>

    )
}

export default PopOut