import React from "react"
import "../css/Footer.css"

interface footer_t {
    onDeciding: (bool: boolean) => void
}

function Footer({ onDeciding }: footer_t) {
    return (
        <>
            <button className="button" onClick={() => onDeciding(false)}>❌</button>
            <button className="button">💬</button>
            <button className="button" onClick={() => onDeciding(true)}>💛</button>
        </>
    )
}

export default Footer