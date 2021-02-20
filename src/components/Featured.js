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
                <li>
                    <Item key={item.id} img={item}/>
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