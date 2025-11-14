import React from "react"
import { useNavigate } from "react-router-dom";
import Nom from "../data/graphic_element/NOM_PAGE_D_ACCUEIL.svg"
import MiniLogo from "../data/graphic_element/LOGO_PETIT_HEADER.svg"

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
      <div className="LogoMenu">
        {isHome ? (
          <h1>ANCELIN «INFAM» WATKINS</h1>
        ) : (
          <img src={MiniLogo} alt="Mini logo header" onClick={goToHome}/>
        )}
      </div>
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