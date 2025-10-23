import React from "react"
import ImageAcceil from "../images/LOGO_PAGE_D_ACCUEIL.svg"
import ImageAbout from "../images/LOGO_FOND_A_PROPOS.svg"

import {lerp, pointOrEllipseIntersection} from "../utils/linear_interpolation.js"

export default function LogoAnimated({ isHome = true }) {
    
    let a = 100;
    let b = 50;

    let width = window.innerWidth;
    let height = window.innerHeight;

    let cx = width / 2;
    let cy = height / 2;

    let imageX = cx;
    let imageY = cy;

    document.addEventListener('mousemove', e =>{
        let image_to_move = document.getElementById("LogoAnimated")
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

    return (
        <div>
            {isHome ? (
                <img id="LogoAnimated" className="LogoAnimated" src={ImageAcceil} alt="LOGO PAGE D'ACCUEIL" />
            ) : (
                <img id="LogoAnimated" className="LogoAnimated" src={ImageAbout} alt="LOGO PAGE ABOUT" />
            )}
        </div> 
    )
}