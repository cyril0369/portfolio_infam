import logo from "../images/LOGO_PAGE_D_ACCUEIL.svg"
import Nom from "../images/NOM_PAGE_D_ACCUEIL.svg"
import {lerp, pointOrEllipseIntersection} from "../utils/linear_interpolation.js"

let a = 100;
let b = 50;

let width = window.innerWidth;
let height = window.innerHeight;

let cx = width / 2;
let cy = height / 2;

let imageX = cx;
let imageY = cy;

document.addEventListener('mousemove', e =>{
    let image_to_move = document.getElementById("LogoAcceuil")
    const px = e.clientX;
    const py = e.clientY;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cx = width / 2;
    let cy = height / 2;
    const hit = pointOrEllipseIntersection(px, py, cx, cy, a, b);
    imageX = lerp(imageX, hit.x, 0.05);
    imageY = lerp(imageY, hit.y, 0.05);
    image_to_move.setAttribute('style', 'top:'+((imageY - 300))+
    "px; left:"+(imageX)+"px;"
    )
})

export default function Acceuil() {
    return(
        <div className="Acceuil">
            <div className="AcceuilMenu">
                <img src={Nom} alt="Nom page d'acceuil" />
                <div className="menu">
                    <button>Projets</button>
                    <button>À propos</button>
                </div>
            </div>
            <div className="AcceuilMain">
                <img id="LogoAcceuil" className="LogoAcceuil" src={logo} alt="LOGO PAGE D'ACCUEIL" />
                <p>
                    Designer graphique <br />
                    specialisé dans le secteur <br />
                    culturel et musicale
                </p>
            </div>
        </div>
        
    )
}