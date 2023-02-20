import React from "react"
import "../css/Footer.css"

interface footer_t {
    onDeciding: React.MouseEventHandler<HTMLButtonElement>
}

function Footer({ onDeciding }: footer_t) {
    return (
        <>
            <button className="button" onClick={onDeciding}>❌</button>
            <button className="button">💬</button>
            <button className="button" onClick={onDeciding}>💛</button>
        </>
    )
}

export default Footer