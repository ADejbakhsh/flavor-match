import React from "react"
import { useReadLocalStorage } from "usehooks-ts"
import Swipe from "./Swipe"
import Cart from "./Cart"
import "../css/App.css"

function App() {
    const lastValidView = useReadLocalStorage("lastValidView") as string // useReadLocalStorage returns type as Value<T> instead of T. TODO fix this or understand why

    if (lastValidView === "Cart")
        return <Cart />
    else
        return <Swipe />

    /* component Time to cook component */
}

export default App
