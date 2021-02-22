import React, {useContext} from "react"
import Item from "./Item"
import {Context} from "../Context"

function AllItems () {
    const {allItems} = useContext(Context)

    return (
        <ul>
            {allItems.map(item => (
                <li key={item.id}>
                    <Item img={item}/>
                </li>
            )
            )}
        </ul>
    )
}

export default AllItems