import React, {useContext} from "react"
import Item from "./Item"
import {Context} from "../Context"

function Featured () {
    const {allItems} = useContext(Context)
    console.log(allItems)

    return(
        <div className="featured">
            <ul>
            <li>
                <Item img="https://images.pexels.com/photos/2058498/pexels-photo-2058498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=162&w=235" name="Tulip Bulbs" price="$29.99"/>
            </li>
            <li>
                <img alt=""></img>
                <h3>Item Name</h3>
                <h4>$50.00</h4>
            </li>
            <li>
                <img alt=""></img>
                <h3>Item Name</h3>
                <h4>$50.00</h4>
            </li>
            </ul>
        </div>
    )
}

export default Featured