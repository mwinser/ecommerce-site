import React, {useContext} from "react"
import {Context} from "../Context"

function BriefCartList () {
    const {cartItems} = useContext(Context)

    return (
        <ul>
            {cartItems.map(item=>(
                <li key={item.id}>{item.name} - {item.price}</li>
            ))}
        </ul>
    )


}

export default BriefCartList