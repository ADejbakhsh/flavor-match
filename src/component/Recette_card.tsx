import React from "react"
import "../css/Recette_card.css"
import photo from "../toDelete/pizza.jpg"
import Resume_recette from "./Resume_recipe"


function Recette_card() {
    const [click, setClick] = React.useState(false)

    // photo temps prix matériel nom
    const recipe_name = "Pizaaa avec un nom hyper long"
    const time = 10
    const price = 2
    const equipement = ["Four", "Four"] // on vois pour la langue en back
    const recipe = ["Dans un saladier verser tout les ingredient sec", "pres chauffer le four a 200°", "mettre la pate dans le four", "blablabla touyeille ", "Enfourné la pizza et yala"]

    // parfois ca double click je ne sait pas pourquoi
    function boolClick() {
        setClick(!click)
    }

    const default_view = () => {
        return (
            <>
                <img src={photo} />
                <div className="bottom-left">
                    <Resume_recette
                        recipe_name={recipe_name}
                        time={time}
                        price={price}
                        equipement={equipement}
                    />
                </div>
            </>
        )
    }
    const recipe_view = recipe.map((step, index) => {
        return (
            <div className="step" key={index}>
                <div className="step-number">{index + 1}</div>
                <div className="step-text">{step}</div>
            </div>
        )
    })

    return (
        <div className="placeholder" onClick={boolClick}>
            {click ? recipe_view : default_view()}
        </div>
    )
}

export default Recette_card