import React from "react"
import "../css/Header.css"

interface header_t {
    number: number
}

function Header({number}: header_t) {

    return (
        <>
            <div className="Account_settings"> account </div>
            <h2>{number}</h2>
            <div className="Cart">  cart </div>
        </>
    )
}

export default Header