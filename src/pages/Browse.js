import React from "react"
import AllItems from "../components/AllItems"
import PopOut from "../components/PopOut"

function Browse(){
    return (
        <>
            <div className="all-items">
                <h2>Shop All Deals</h2>
                <AllItems />
            </div>
            <PopOut />
        </>
    )
}

export default Browse