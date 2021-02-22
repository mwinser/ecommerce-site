import React, {useContext, useState} from "react"
import Item from "./Item"
import {Context} from "../Context"

function AllItems () {
    const {allItems} = useContext(Context)
    const [query, setQuery] = useState("")
    let regex = new RegExp(query,'gi')

    function queryChange(e){
        setQuery(e.target.value)
        regex = new RegExp(query,'gi')
    }

    return (
        <>
        <label> Search:        
        <input type="text" value={query} onChange={queryChange}></input>
        </label>
        <ul>
            {allItems
                .filter(item=>regex.test(item.name)
                    )
                .map(item => (
                    <li key={item.id}>
                        <Item img={item}/>
                    </li>
                )
            )}
        </ul>
        </>
    )
}

export default AllItems