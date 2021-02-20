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
                    <Item img={item.img} name={item.name} price={item.price}/>
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