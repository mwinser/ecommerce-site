import React, {useContext} from "react"
import Item from "./Item"
import {Context} from "../Context"

function Featured () {
    const {allItems} = useContext(Context)

    function featuredList() {
        return (
    <ul>
        {allItems.map(item => {
            if (item.isFeatured){
                return (
                <li key={item.id}>
                    <Item item={item}/>
                </li>)
            }
            return null
        }

        )}
    </ul>
    )}

    return(
        <div className="featured">
            {featuredList()}
        </div>
    )
}

export default Featured