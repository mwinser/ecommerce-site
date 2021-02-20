import React from "react"

function Item ({name, img, price}) {
    
    return (
        <>
            <img src={img}alt={name}></img>
            <h3>{name}</h3>
            <h4>{price}</h4>
        </>
    )
}

export default Item