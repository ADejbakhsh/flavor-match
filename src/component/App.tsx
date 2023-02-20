import React from "react"
import "../css/App.css"
import Header from "./Header"
import Recette_card from "./Recette_card"
import Footer from "./Footer"
import { recette_t } from "../types/global"

const recettes: recette_t[] = [
    {
        id: 51891,
        name: "Pizza",
        img_url: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQcHbxCjB7FY6Rttw1VZFdh0gIZmm4MLLjfmD0dhA11saxBKG_D49VVkmlvz3sE71-b",
        time: 10,
        price: 2,
        equipement: ["Four", "Four"],
        recipe: [
            "Dans un saladier verser tout les ingredient sec",
            "pres chauffer le four a 200°",
            "mettre la pate dans le four",
            "blablabla touyeille ",
            "Enfourné la pizza et yala",
        ],
        hastag: ["#pizza", "#italie", "#tomate", "#fromage"],
    },
    {
        id: 148591,
        name: "Tourte de blette",
        img_url: "http://www.fashioncooking.fr/wp-content/uploads/2013/04/tourte-de-blettes-sucree.jpg",
        time: 35,
        price: 1,
        equipement: ["Four", "Four"],
        recipe: [
            "Dans une poêle, faire cuire la bléte dans un peu d'huile d'olive.",
            "Dans un saladier, mélanger la farine, le sel, le sucre et le beurre coupé en petits morceaux.",
            "Ajouter l'eau et pétrir jusqu'à obtenir une pâte homogène.",
            "Laisser reposer 30 minutes au réfrigérateur.",
            "Préchauffer le four à 180°C (th.6).",
            "Etaler la pâte sur un plan de travail fariné et foncer un moule à tourt.",
            "enfourner la tourt 15 minutes.",
        ],
        hastag: ["#tourte", "#blette", "#dessert", "Grand-mère"],
    },
    {
        id: 51891,
        name: "Pizza",
        img_url: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQcHbxCjB7FY6Rttw1VZFdh0gIZmm4MLLjfmD0dhA11saxBKG_D49VVkmlvz3sE71-b",
        time: 10,
        price: 2,
        equipement: ["Four", "Four"],
        recipe: [
            "Dans un saladier verser tout les ingredient sec",
            "pres chauffer le four a 200°",
            "mettre la pate dans le four",
            "blablabla touyeille ",
            "Enfourné la pizza et yala",
        ],
        hastag: ["#pizza", "#italie", "#tomate", "#fromage"],
    }
]

function App() {
    //fetch recette // TODO currently hard coded
    const [arrayRecette, setArrayRecette] = React.useState(recettes)
    const [index, setIndex] = React.useState(0)
    const [current_recette, setCurrentRecette] = React.useState(arrayRecette[index])

    function onDeciding() {
        if (index < arrayRecette.length - 1) {
            setIndex(index + 1)
            setCurrentRecette(arrayRecette[index + 1])
            // I’ve updated the state, but logging gives me the old value 
            // https://beta.reactjs.org/reference/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value
        }
    }


    return (
        <div className="container">
            <div className="header">
                <Header />
            </div>
            <div className="recipe">
                {/*TODO wrap  dans un truc qui permet de swip */}
                <Recette_card full_recipe={current_recette} />
                <div />
            </div>
            <div className="footer">
                <Footer onDeciding={onDeciding} />
                {/* accepter ou refuser la recette actuelle + commentaire quand swip vers le haut*/}
            </div>
        </div>
    )
}

export default App
