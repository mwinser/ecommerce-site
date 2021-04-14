import React, {useContext} from "react"
import {Context} from "../Context"
import {useParams} from "react-router-dom"
import Featured from "../components/Featured"
import Item from "../components/Item"


function ItemDetail(){
    const {allItems} = useContext(Context)
    const {itemId}= useParams()
    const thisItem = allItems.find(item=>item.id===itemId)


    return(
        <>
        <Item item={thisItem} type="full"/>
        <div className="more-like-this">
            <h2>More like this:</h2>
            <Featured/>
        </div>
        </>
    )
}

export default ItemDetail