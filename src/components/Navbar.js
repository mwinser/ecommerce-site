import React, {useContext, useEffect, useState} from "react"
import {Link, useLocation} from "react-router-dom"
import {Context} from "../Context"
import flowerBorder from "../images/evie-s-bSVGnUCk4tk-unsplash.jpg"
import petalLogo from "../images/petal_logo.svg"


function Navbar () {
    const {user, cartItems} = useContext(Context)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const location = useLocation()
    const [areWeHome, setAreWeHome] = useState(location.pathname==="/")
    
    function toggleMenu(bool) {
        setIsMenuOpen(prevIsMenuOpen => bool===undefined ? !prevIsMenuOpen : bool)
      }
    function showHomeBanner(bool){
      setAreWeHome(bool)
    }
    
    
    useEffect(()=>{
      //if url changes:
      //close menu
      toggleMenu(false)
      //scroll to top
      window.scrollTo(0, 0)
      //show banner on home
      showHomeBanner(location.pathname==="/")
    },[location])

    return (
    <nav className="navbar">
        <div className="navbar-content">
          <div className="flower-border-container" style={!areWeHome? {height:4+'rem'}:null}>
            {areWeHome 
              ? <>
                  <img className="flower-border" src={flowerBorder} alt="decorative border"/>
                </>
              : null}
            <img className={areWeHome? "logo" : "small-logo"} src={petalLogo} alt="petal logo" />
          </div>
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
        </div>
    </nav>
    )
}



export default Navbar