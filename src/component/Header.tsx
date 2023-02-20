import React from "react"
import "../css/Header.css"

interface header_t {
    number: number
}

function Header({ number }: header_t) {

    return (
        <>
            <img className="Account_settings" src="/account.png" />
            <h2>{number}</h2>
            <img className="Cart" src="/cart.png" />
        </>
    )
}

export default Header