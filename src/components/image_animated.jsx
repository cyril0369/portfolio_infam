
import { useEffect, useRef } from "react"
import ImageAcceil from "../data/graphic_element/LOGO_PAGE_D_ACCUEIL.svg"
import ImageAbout from "../data/graphic_element/LOGO_FOND_A_PROPOS.svg"

import {lerp, pointOrEllipseIntersection} from "../utils/linear_interpolation.js"

export default function LogoAnimated({ isHome = true }) {
    
    const logoRef = useRef(null)
    const a = 100;
    const b = 50;

    useEffect(() => {
        const image = logoRef.current
        if (!image) return

        let imageX = window.innerWidth / 2
        let imageY = window.innerHeight / 2
        let targetX = imageX
        let targetY = imageY

        const width = window.innerWidth
        const height = window.innerHeight
        const cx = width / 2
        const cy = height / 2

        // Quand la souris bouge → on change la cible
        const handleMouseMove = e => {
            const px = e.clientX
            const py = e.clientY
            const hit = pointOrEllipseIntersection(px, py, cx, cy, a, b)
            targetX = hit.x
            targetY = hit.y
        }
        const animate = () => {
            imageX = lerp(imageX, targetX, 0.05)
            imageY = lerp(imageY, targetY, 0.05)

            image.style.top = `${imageY - 300}px`
            image.style.left = `${imageX}px`

            requestAnimationFrame(animate)
        }
        

        document.addEventListener("mousemove", handleMouseMove)
        requestAnimationFrame(animate)
        return () => document.removeEventListener("mousemove", handleMouseMove)

    }, [])

    return (
        <div>
            {isHome ? (
                <img ref={logoRef} id="LogoAnimated" className="LogoAnimatedHome" src={ImageAcceil} alt="LOGO PAGE D'ACCUEIL" />
            ) : (
                <img ref={logoRef} id="LogoAnimated" className="LogoAnimatedAbout" src={ImageAbout} alt="LOGO PAGE ABOUT" />
            )}
        </div> 
    )
}