import React from "react"
import Nom from "../images/NOM_PAGE_D_ACCUEIL.svg"
import MiniLogo from "../images/LOGO_PETIT_HEADER.svg"

export default function Menu({ isHome = true, isAbout = false, isProject = false }) {
    const className = [
    "Selector",
    isHome && "Home",
    isAbout && "About",
    isProject && "Projets"
  ]
    .filter(Boolean) 
    .join(" "); 

  return (
    <div className="Menu">
      {isHome ? (
        <img className="NomInfam" src={Nom} alt="Nom page d'accueil" />
      ) : (
        <img className="LogoInfam" src={MiniLogo} alt="Mini logo header" />
      )}

      <div className={className}>
        <button className="ButtonProject">Projets</button>
        <button className="ButtonAbout">À propos</button>
      </div>
    </div>
  );
}