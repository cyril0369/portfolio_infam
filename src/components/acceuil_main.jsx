import React from "react"
import logo from "../images/LOGO_PAGE_D_ACCUEIL.svg"

export default function AcceuilMain() {

    return(
        <div className="AcceuilMain">
            <img 
            className="LogoAcceuil" src={logo} alt="LOGO PAGE D'ACCUEIL" 
            />
            <p>
                Designer graphique <br />
                specialisé dans le secteur <br />
                culturel et musicale
            </p>
        </div>
    )
}