import React from "react"
import Hero from "../components/Hero"
import Featured from "../components/Featured"


function Home () {
    return(
        <>
            <Hero />
            <h2>Featured Items</h2>
            <Featured />
        </>
    )
}

export default Home