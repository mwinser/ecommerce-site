import React from "react"
import Hero from "../components/Hero"
import PopOut from "../components/PopOut"
import Featured from "../components/Featured"


function Home () {
    return(
        <>
            <Hero />
            <h2>Featured Items</h2>
            <Featured />
            <PopOut />
        </>
    )
}

export default Home