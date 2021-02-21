import React from "react"
import {Link} from "react-router-dom"

function Hero () {
    return(
    <div className="hero">
        <h1>Spring is in the air!</h1>
        <Link to="/browse"><button>Shop All Deals</button></Link>
    </div>
    )
}

export default Hero