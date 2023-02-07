import React from "react"
import "../css/App.css"
import Header from "./Header"
import Recette_card from "./Recette_card"

function App() {
    return (
        <div className="container">
            <div className="header">
                <Header />
            </div>
            <div className="recipe">
                <Recette_card />
                <div />
            </div>
            <div className="footer">
                
            </div>
        </div>
    )
}

export default App
