import Menu from "../components/menu"

export default function Projects() {
    return (
        <div className="Page ProjectsPage">
            <Menu isHome={false} isAbout={false} isProject={true} />
            <div className="ListProjects">
                <h3>Encore</h3>
                <h3>High-lo</h3>
                <h3>Plates-Formes</h3>
                <h3>Lvline</h3>
                <h3>LégendesIndusties</h3>
                <h3>Covers/Posters</h3>
            </div>
            <main>
                <div className="detail">encore</div>
                <div className="images">image ici</div>
            </main>
        </div>
    )
}