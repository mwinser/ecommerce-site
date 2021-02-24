import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Item ({img}) {
    const {addToCart, cartItems, removeFromCart, showPopUps} = useContext(Context)
   

    function cartButton () {
        if (cartItems.some(cartItem=>cartItem.id===img.id)){
            return (<button onClick={()=>removeFromCart(img)}>Remove From Cart</button>)
        }else {
            return (<button onClick={()=>{
                addToCart(img)
                if (showPopUps){
                    document.getElementsByClassName("popout-container")[0]
                    .classList
                    .remove("offscreen")
                    }
                }}>Add To Cart</button>)
        }
    }



    return (
        <>
            <img src={img.img}alt={img.name}></img>
            <h3>{img.name}</h3>
            <h4>{img.price.toLocaleString( 'en-US',{style:'currency', currency: 'USD'})}</h4>
            <div><Link to={`/browse/${img.id}`}>View Product Details</Link></div>
            {cartButton()}
        </>
    )
}

export default Item