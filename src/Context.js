import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allItems, setAllItems]=useState([])

    useEffect(() => {
        fetch("./flower.json")
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])

    return (
        <Context.Provider value={{allItems}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}