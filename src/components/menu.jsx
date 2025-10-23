import React from "react"
import Nom from "../images/NOM_PAGE_D_ACCUEIL.svg"
import MiniLogo from "../images/LOGO_PETIT_HEADER.svg"

export default function Menu({ isHome = true }) {
    return (
        <div className='Menu'>
            {isHome ? (
                <img className='NomInfam' src={Nom} alt="Nom page d'acceuil" />
            ) : (
                <img className='LogoInfam' src={MiniLogo} alt="Mini logo header" />
            )}
            <div className="menu">
                <button>Projets</button>
                <button>À propos</button>
            </div>
        </div>
    )
}