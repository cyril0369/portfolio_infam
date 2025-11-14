import Menu from "../components/menu"
import Marquee from "../components/marquee_project"
import ProjectsDisplay from "../components/projects_display"

export default function Projects() {
    return (
        <div className="Page ProjectsPage">
            <Menu isHome={false} isAbout={false} isProject={true} />
            {/* <Marquee/> */}
            <ProjectsDisplay/>
        </div>
    )
}