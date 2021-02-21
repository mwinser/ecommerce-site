import React, {useContext} from "react"
import {Context} from "../Context"
import {useParams} from "react-router-dom"


function ItemDetail(props){
    const {allItems, cartItems, addToCart, removeFromCart} = useContext(Context)
    const {itemId}= useParams()
    const thisItem = allItems.find(item=>item.id===itemId)
    
    function cartButton () {
        if (cartItems.some(cartItem=>cartItem.id===thisItem.id)){
            return (<button onClick={()=>removeFromCart(thisItem)}>Remove From Cart</button>)
        }else {
            return (<button onClick={()=>addToCart(thisItem)}>Add To Cart</button>)
        }
    }


    return(
        <div className="item-details">
            <img src={thisItem.img} alt={thisItem.name}></img>
            <div className="right">
                <h1>{thisItem.name}</h1>
                <h3>{thisItem.price}</h3>
                {cartButton()}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae urna in libero varius maximus. Suspendisse mattis quis elit in semper. Fusce non mauris vitae sapien mattis sollicitudin. 
                </p>
                <p>Ut varius pellentesque aliquet. Aenean ac consectetur neque. Nullam laoreet suscipit leo eu fermentum. Morbi vel placerat tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sit amet ipsum ipsum. </p>
            </div>
        </div>
    )
}

export default ItemDetail