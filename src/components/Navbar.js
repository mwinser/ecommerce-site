import React from "react"
import {Link} from "react-router-dom"

function Navbar () {
    return (
    <nav className="navbar">
        <div className="logo">LOGO</div>
        <div className="menu">
            <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
            <li>Login</li>
            
            </ul>
        </div>
    </nav>
    )
}



export default Navbar