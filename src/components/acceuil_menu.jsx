import React from "react";
import Nom from "../images/NOM_PAGE_D_ACCUEIL.svg"

export default function AcceuilMenu() {
    return(
        <div className="AcceuilMenu">
            <img src={Nom} alt="Nom page d'acceuil" />
            <div className="menu">
                <button>Projets</button>
                <button>À propos</button>
            </div>
        </div>
    )
}