import React, {useState, useEffect} from "react"
import data from "./flowers"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allItems, setAllItems] = useState([])

    useEffect(()=>{setAllItems(data)},[])

    return (
        <Context.Provider value={{allItems}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}