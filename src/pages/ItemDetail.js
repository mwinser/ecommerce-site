import React, {useContext} from "react"
import {Context} from "../Context"
import {useParams} from "react-router-dom"
import Featured from "../components/Featured"
import CartButton from "../components/CartButton"


function ItemDetail(){
    const {allItems} = useContext(Context)
    const {itemId}= useParams()
    const thisItem = allItems.find(item=>item.id===itemId)


    return(
        <>
        <div className="item-details">
            <img src={thisItem.img} alt={thisItem.name}></img>
            <div className="right">
                <h1>{thisItem.name}</h1>
                <h3>{thisItem.price.toLocaleString( 'en-US',{style:'currency', currency: 'USD'})}</h3>
                <CartButton item={thisItem}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae urna in libero varius maximus. Suspendisse mattis quis elit in semper. Fusce non mauris vitae sapien mattis sollicitudin. 
                </p>
                <p>Ut varius pellentesque aliquet. Aenean ac consectetur neque. Nullam laoreet suscipit leo eu fermentum. Morbi vel placerat tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sit amet ipsum ipsum. </p>
            </div>
        </div>
        <div className="more-like-this">
            <h2>More like this:</h2>
            <Featured/>
        </div>
        </>
    )
}

export default ItemDetail