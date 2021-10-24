import React, {useContext} from "react"
import {Context} from "../Context"


function CartButton(props){
    const {cartItems, addToCart, removeFromCart, showPopUps} = useContext(Context)
    const item = props.item
    
    if (cartItems.some(cartItem=>cartItem.id===item.id)){
        return (
            <button onClick={()=>
                removeFromCart(item)
                }>
                Remove From Cart
            </button>)
    }else {
        return (
            <button onClick={()=>{
                addToCart(item)
                if (showPopUps){
                    document.getElementsByClassName("popout-container")[0]
                    .classList
                    .remove("offscreen")
                    }
                }}>
                Add To Cart
            </button>)
    }

}

export default CartButton