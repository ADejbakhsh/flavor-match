import React from "react"
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts"
import Header from "./Header"
import Footer from "./Footer"
import Recette_card from "./Recette_card"
import { recette_t } from "../types/global"
import "../css/Swipe.css"

//fetch recette // TODO currently hard coded
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
        id: 151,
        name: "Poulet au curry",
        img_url: "https://www.platetrecette.fr/wp-content/uploads/2020/09/Filets-de-poulet-au-curry.jpg",
        time: 45,
        price: 2,
        equipement: ["Four", "Four"],
        recipe: [
            "Dans un saladier, mélanger la farine, le sel, le sucre et le beurre coupé en petits morceaux.",
            "Ajouter l'eau et pétrir jusqu'à obtenir une pâte homogène.",
            "Laisser reposer 30 minutes au réfrigérateur.",
            "Préchauffer le four à 180°C (th.6).",
            "Etaler la pâte sur un plan de travail fariné et foncer un moule à tourt.",
            "enfourner la tourt 15 minutes.",
        ],
        hastag: ["#poulet", "#curry", "#indien", "#plat"],
    },
    {
        id: 12,
        name: "soupe a l'oignon",
        img_url: "https://assets.afcdn.com/recipe/20181012/82641_w1024h1024c1cx2136cy1424.jpg",
        time: 30,
        price: 1,
        equipement: ["Four", "Four"],
        recipe: [
            " coupé les oignon en rondelle",
            "mettre les oignon dans une casserole",
            "ajouter de l'eau",
            "laisser cuire 30 min",
            "servir",
        ],
        hastag: ["#soupe", "#oignon", "#Hiver", "#chaud", "#bol"],
    },

]

function Swipe() {
    // TODO see if there is a better way to set the default value // probaly make the abstraction better
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [lastValidView, setLastValidView] = useLocalStorage("lastValidView", "Swipe")
    const Cart_ReadOnly = useReadLocalStorage("Cart") as recette_t[] // useReadLocalStorage returns type as Value<T> instead of T. TODO fix this or understand why
    const [Cart, setCart] = useLocalStorage<recette_t[]>("Cart", Cart_ReadOnly ? Cart_ReadOnly : [])
    
    const [arrayRecette, setArrayRecette] = React.useState(recettes)
    const [index, setIndex] = React.useState(0)
    const [current_recette, setCurrentRecette] = React.useState(arrayRecette[index])

    function onDeciding(bool: boolean): void {
        if (index < arrayRecette.length - 1) {
            setIndex(index + 1)
            setCurrentRecette(arrayRecette[index + 1])
        }
        bool ? setCart([...Cart, current_recette]) : null
    }



    return (
        <div className="container">
            <div className="header">
                <Header number={Cart.length} />
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

export default Swipe
