import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Item ({img}) {
    const {addToCart, cartItems, removeFromCart} = useContext(Context)

    function cartButton () {
        if (cartItems.some(cartItem=>cartItem.id===img.id)){
            return (<button onClick={()=>removeFromCart(img)}>Remove From Cart</button>)
        }else {
            return (<button onClick={()=>addToCart(img)}>Add To Cart</button>)
        }
    }

    return (
        <>
            <img src={img.img}alt={img.name}></img>
            <h3>{img.name}</h3>
            <h4>{img.price}</h4>
            {cartButton()}
            <Link to={`/browse/${img.id}`}><button>Product Details</button></Link>
        </>
    )
}

export default Item