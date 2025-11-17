import React from "react";
import { useNavigate } from "react-router-dom";
import { toggleTheme, sleep, toggleThemeWithFlash } from "../utils/utils";
import Nom from "../data/graphic_element/NOM_PAGE_D_ACCUEIL.svg";
import MiniLogo from "../data/graphic_element/LOGO_PETIT_HEADER.svg";

export default function Menu({
  isHome = true,
  isAbout = false,
  isProject = false,
}) {
  const duration = 200;
  const navigate = useNavigate();
  const goToAbout = async () => {
    // toggleTheme();
    // await sleep(duration);
    navigate("/about");
    // await sleep(duration);
    // toggleTheme();
  };

  const goToProject = async () => {
    // toggleTheme();
    // await sleep(duration);
    navigate("/projects");
    // await sleep(duration);
    // toggleTheme();
  };

  const goToHome = async () => {
    // toggleTheme();
    // await sleep(duration);
    navigate("/");
    // await sleep(duration);
    // toggleTheme();
  };

  const className = [
    "Selector",
    isHome && "Home",
    isAbout && "About",
    isProject && "Projects",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="Menu">
      <div className="LogoMenu">
        {isHome ? (
          <h1>ANCELIN «INFAM» WATKINS</h1>
        ) : (
          <img
            className="clickable"
            src={MiniLogo}
            alt="Mini logo header"
            onClick={goToHome}
          />
        )}
      </div>
      <div className={className}>
        <button
          className="ButtonProjects clickable"
          onClick={!isProject ? goToProject : undefined}
        >
          Projets
        </button>
        <button
          className="ButtonAbout clickable"
          onClick={!isAbout ? goToAbout : undefined}
        >
          À propos
        </button>
      </div>
    </div>
  );
}
