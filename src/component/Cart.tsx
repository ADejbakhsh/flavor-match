import React from "react"
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts"
import { recette_t } from "../types/global"

function Cart() {
    const [lastValidView, setLastValidView] = useLocalStorage("lastValidView", "Cart")
    const Cart_ReadOnly = useReadLocalStorage("Cart") as recette_t[] // useReadLocalStorage returns type as Value<T> instead of T. TODO fix this or understand why
    const [Cart, setCart] = useLocalStorage<recette_t[]>("Cart", Cart_ReadOnly)

    function returnToSwipe() {
        setLastValidView("Swipe")
    }

    function removeRecetteFromCart(recette: recette_t) {
        setCart(Cart.filter((recette_in_cart) => recette_in_cart.id !== recette.id))
    }

    function displayCart() {
        return Cart.map((recette, index) => {
            return (
                <div key={index}>
                    <p>{recette.name}</p>
                    <button onClick={() => removeRecetteFromCart(recette)}>Remove</button>
                </div>
            )
        })
    }

    return (
        <div>
            <button onClick={returnToSwipe}>Swipe more</button>
            {displayCart()}
        </div>
    )
}

export default Cart