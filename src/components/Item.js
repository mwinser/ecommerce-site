import React from "react"
import {Link} from "react-router-dom"
import CartButton from "./CartButton"


function Item ({img}) {

    return (
        <>
            <img src={img.img}alt={img.name}></img>
            <h3>{img.name}</h3>
            <h4>{img.price.toLocaleString( 'en-US',{style:'currency', currency: 'USD'})}</h4>
            <div><Link to={`/browse/${img.id}`}>View Product Details</Link></div>
            <CartButton item={img}/>
        </>
    )
}

export default Item