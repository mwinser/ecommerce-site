import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Navbar () {
    const {user, cartItems} = useContext(Context)
    return (
    <nav className="navbar">
        <div className="logo">.petals</div>
        <div className="menu">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/browse"><li>Browse</li></Link>
                <Link to="/cart"><li>{cartItems.length>0 ? `Cart(${cartItems.length})` : "Cart"}</li></Link>
                <Link to="/login"><li>{user? user: "Login"}</li></Link>
            </ul>
        </div>
        
    </nav>
    )
}



export default Navbar