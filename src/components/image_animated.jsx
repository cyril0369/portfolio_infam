
import { useEffect, useRef } from "react"
import ImageAcceil from "../images/LOGO_PAGE_D_ACCUEIL.svg"
import ImageAbout from "../images/LOGO_FOND_A_PROPOS.svg"

import {lerp, pointOrEllipseIntersection} from "../utils/linear_interpolation.js"

export default function LogoAnimated({ isHome = true }) {
    
    const logoRef = useRef(null)
    const a = 100;
    const b = 50;

    useEffect(() => {
        let imageX = window.innerWidth / 2
        let imageY = window.innerHeight / 2

        const handleMouseMove = e => {
        const image = logoRef.current
        if (!image) return

        const width = window.innerWidth
        const height = window.innerHeight
        const cx = width / 2
        const cy = height / 2
        const px = e.clientX
        const py = e.clientY

        const hit = pointOrEllipseIntersection(px, py, cx, cy, a, b)
        imageX = lerp(imageX, hit.x, 0.05)
        imageY = lerp(imageY, hit.y, 0.05)

        image.style.top = `${imageY - 300}px`
        image.style.left = `${imageX}px`
        }

        document.addEventListener("mousemove", handleMouseMove)
        return () => document.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div>
            {isHome ? (
                <img ref={logoRef} id="LogoAnimated" className="LogoAnimated" src={ImageAcceil} alt="LOGO PAGE D'ACCUEIL" />
            ) : (
                <img ref={logoRef} id="LogoAnimated" className="LogoAnimated" src={ImageAbout} alt="LOGO PAGE ABOUT" />
            )}
        </div> 
    )
}