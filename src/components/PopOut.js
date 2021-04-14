import React, {useContext} from "react"
import {Context} from "../Context"
import {Link} from "react-router-dom"
import BriefCartList from "./BriefCartList"

function PopOut () {
    const {disableShowPopUps} = useContext(Context)

    function sendOffScreen(){
        document
            .getElementsByClassName("popout-container")[0]
            .classList
            .add("offscreen")
    }

    return (
    <div className="popout-container offscreen">
        <div className="popout">
            <i onClick={()=>sendOffScreen()}>
                <svg id="ex" height="30" width="30">
                    <line className="ex top one" x1="3" y1="15" x2="27" y2="15"  />
                    <line className="ex bottom three" x1="3" y1="15" x2="27" y2="15" />
                </svg>
            </i>
            <h1>Your cart:</h1>
            <BriefCartList/>
            <button><Link to="/cart">Go to Checkout</Link></button>
            <label>
                <input type="checkbox" onChange={()=>{disableShowPopUps();sendOffScreen()}}></input> 
                Disable future pop-ups
            </label>
            
            
        </div>
    </div>

    )
}

export default PopOut