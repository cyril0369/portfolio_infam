import React from "react"
import { useNavigate } from "react-router-dom";
import Nom from "../images/NOM_PAGE_D_ACCUEIL.svg"
import MiniLogo from "../images/LOGO_PETIT_HEADER.svg"

export default function Menu({ isHome = true, isAbout = false, isProject = false }) {

  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about")
  }
  const goToProject = () => {
    navigate("/projects")
  }
  const goToHome = () => {
    navigate("/")
  }

  const className = [
    "Selector",
    isHome && "Home",
    isAbout && "About",
    isProject && "Projects"
  ]
    .filter(Boolean) 
    .join(" "); 

  return (
    <div className="Menu">
      {isHome ? (
        <img className="NomInfam" src={Nom} alt="Nom page d'accueil" />
      ) : (
        <img className="LogoInfam" src={MiniLogo} alt="Mini logo header" onClick={goToHome}/>
      )}

      <div className={className}>
        <button
          className="ButtonProjects"
          onClick={!isProject ? goToProject : undefined}
        >
          Projets
        </button>
        <button 
          className="ButtonAbout"
          onClick={!isAbout ? goToAbout : undefined}
        >
          À propos
        </button>
      </div>
    </div>
  );
}