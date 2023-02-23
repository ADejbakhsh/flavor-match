import React from "react"
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts"
import "../css/Header.css"

interface header_t {
    number: number
}

function Header({ number }: header_t) {
    const lastValidView_r = useReadLocalStorage("lastValidView") as string // useReadLocalStorage returns type as Value<T> instead of T. TODO fix this or understand why
    const [lastValidView, setLastValidView] = useLocalStorage("lastValidView", lastValidView_r)

    function goTo(view: string) {
        setLastValidView(view)
    }

    return (
        <>
            <img className="header-icons" src="/account.png" />
            <img className="header-icons" src="/title.png" />
            <div onClick={() => goTo("Cart")}>
                <img className="header-icons" src="/cart.png" />
                <div className="pastille-number">{number}</div>
            </div>

        </>
    )
}

export default Header