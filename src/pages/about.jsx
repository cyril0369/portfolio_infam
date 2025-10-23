import Menu from "../components/menu"
import LogoAnimated from "../components/image_animated"

export default function About() {
    return (
        <div className="Page">
            <Menu isHome={false} />
            <LogoAnimated isHome={false}/>
        </div>
    )
}