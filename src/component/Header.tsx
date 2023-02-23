import React from "react"
import "../css/Header.css"

interface header_t {
    number: number
}

function Header({ number }: header_t) {

    return (
        <>
            <img className="header-icons" src="/account.png" />
            <img className="header-icons" src="/title.png" />
            <div>
                <img className="header-icons" src="/cart.png" />
                <div className="pastille-number">{number}</div>
            </div>

        </>
    )
}

export default Header