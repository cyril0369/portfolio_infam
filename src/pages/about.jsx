import Menu from "../components/menu"
import React from "react"

export default function About() {
    return (
        <div className="Page">
            <Menu isHome={false} />
            <h1>À propos !</h1>
        </div>
    )
}