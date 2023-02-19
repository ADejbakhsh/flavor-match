import React from "react"
import "../css/Recette_card.css"

interface resume_recipe_t {
    recipe_name: string,
    time: number,
    price: number,
    equipement: string[],
    hastag: string[]
}


function Resume_recipe({ recipe_name, time, price, equipement, hastag }: resume_recipe_t) {

    // Change le int prix en emoji
    let string_price = ""
    for (let i = 0; i < price; i++) {
        string_price += "💰"
    }

    // TODO a voir avec le back si ca ca rest
    let list_equipement = ""
    for (let i = 0; i < equipement.length; i++) {
        list_equipement += equipement[i]
        if (i + 1 !== equipement.length)
            list_equipement += ", "
    }

    return (
        <>
            <div className="card-title card-text">{recipe_name}</div>
            <div className="card-text">{time} min </div>
            <div className="card-text">{string_price}</div>
            <div className="card-text">{list_equipement}</div>
            <div className="card-text">{hastag}</div>

        </>
    )
}

export default Resume_recipe