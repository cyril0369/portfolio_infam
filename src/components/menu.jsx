import Nom from "../images/NOM_PAGE_D_ACCUEIL.svg"
import MiniLogo from "../images/LOGO_PETIT_HEADER.svg"

export default function Menu() {
    return(
        <div className="Menu">
            <img src={Nom} alt="Nom page d'acceuil" />
            <div className="menu">
                <button>Projets</button>
                <button>À propos</button>
            </div>
        </div>
    )
}