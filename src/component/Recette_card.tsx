import React from "react"
import "../css/Recette_card.css"
import Resume_recette from "./Resume_recipe"
import { recette_t } from "../types/global"


interface recette_card_t {
        full_recipe: recette_t
}

function Recette_card({ full_recipe }: recette_card_t) {
    const [click, setClick] = React.useState(false)
    // parfois ca double click je ne sait pas pourquoi
    function boolClick() {
        setClick(!click)
    }

    const default_view = () => {
        return (
            <>
                <img src={full_recipe.img_url} />
                <div className="bottom-left">
                    <Resume_recette
                        recipe_name={full_recipe.name}
                        time={full_recipe.time}
                        price={full_recipe.price}
                        equipement={full_recipe.equipement}
                        hastag={full_recipe.hastag}
                    />
                </div>
            </>
        )
    }
    const recipe_view = full_recipe.recipe.map((step, index) => {
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