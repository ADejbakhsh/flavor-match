import React from "react"
import "../css/Recette_card.css"
import photo from "../toDelete/pizza.jpg"
import Resume_recette from "./Resume_recipe"


function Recette_card() {
    // photo temps prix matériel nom
    const recipe_name = "Pizaaa avec un nom hyper long"
    const time = 10
    const price = 2
    const equipement = ["Four", "Four"] // on vois pour la langue en back

    return (
        <div className="placeholder">
            <img src={photo} />
            <div className="bottom-left">
                <Resume_recette recipe_name={recipe_name} time={time} price={price} equipement={equipement} />
            </div>
        </div>
    )
}

export default Recette_card