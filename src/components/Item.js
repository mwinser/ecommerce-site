import React from "react"
import {Link} from "react-router-dom"
import CartButton from "./CartButton"


function Item (props) {
    const item = props.item
    
    if (props.type==="full"){
        return(
            <div className="item-details">
                <img src={item.img} alt={item.name}></img>
                <div className="right">
                    <h1>{item.name}</h1>
                    <h3>{item.price.toLocaleString( 'en-US',{style:'currency', currency: 'USD'})}</h3>
                    <CartButton item={item}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae urna in libero varius maximus. Suspendisse mattis quis elit in semper. Fusce non mauris vitae sapien mattis sollicitudin. 
                    </p>
                    <p>Ut varius pellentesque aliquet. Aenean ac consectetur neque. Nullam laoreet suscipit leo eu fermentum. Morbi vel placerat tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sit amet ipsum ipsum. </p>
                </div>
            </div>
        )
    }else {
        return (
        <>
            <Link to={`/browse/${item.id}`}>
            <img src={item.img}alt={item.name}></img>
            </Link>
            <div className="name-and-price">
                <h3>{item.name}</h3>
                <h4>${item.price}</h4>
            </div>
            <CartButton item={item}/>
        </>
        )
    }

}

export default Item