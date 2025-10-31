import Menu from "../components/menu"

export default function Projects() {
    return (
        <div className="Page ProjectsPage">
            <Menu isHome={false} isAbout={false} isProject={true} />
            <h1>page project</h1>
        </div>
    )
}