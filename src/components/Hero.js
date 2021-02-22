import React from "react"
import {Link} from "react-router-dom"

function Hero () {
    return(
    <div className="hero">
        <h1>Spring is in the air!</h1>
        <button><Link to="/browse">Shop All Deals</Link></button>
    </div>
    )
}

export default Hero