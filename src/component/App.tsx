import React from "react"
import "../css/App.css"
import Header from "./Header"
import Recette_card from "./Recette_card"
import Footer from "./Footer"

function App() {
    return (
        <div className="container">
            <div className="header">
                <Header />
            </div>
            <div className="recipe">
                {/*TODO wrap  dans un truc qui permet de swip */}
                <Recette_card />
                <div />
            </div>
            <div className="footer">
                <Footer />
                {/* accepter ou refuser la recette actuelle + commentaire quand swip vers le haut*/}
            </div>
        </div>
    )
}

export default App
