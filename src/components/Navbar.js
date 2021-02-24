import React, {useContext, useEffect, useState} from "react"
import {Link, useLocation} from "react-router-dom"
import {Context} from "../Context"


function Navbar () {
    const {user, cartItems} = useContext(Context)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()



    function toggleMenu(bool) {
        setIsMenuOpen(prevIsMenuOpen => bool===undefined ? !prevIsMenuOpen : bool)
      }

    useEffect(()=>{toggleMenu(false)},[location])
    return (
    <nav className="navbar">
        <div className="logo">.petals</div>
        <div className="menu">
        <i onClick={()=>toggleMenu()}>
          <svg id="ex" height="30" width="30">
            <line className={isMenuOpen ? "ex top one" : "ex top"} x1="3" y1="15" x2="27" y2="15"  />
            <line className={isMenuOpen ? "ex two" : "ex"} x1="3" y1="15" x2="27" y2="15" />
            <line className={isMenuOpen ? "ex bottom three" : "ex bottom"} x1="3" y1="15" x2="27" y2="15" />
          </svg>
        </i>
            <ul className= {isMenuOpen ? 'nav-open': null}>
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