import projects from "../object/projects_objects.json";
import StarsProject from "../data/graphic_element/ÉTOILES_PROJET.svg";

export default function ProjectsDisplay() {

    const project = projects.aboueb_beat_tape;

    return(
        <main>
            <div className="detail">
                <h1>{project.title}</h1>
                <h4>{project.date}</h4>
                <br />
                <p>{project.description}</p>
                <br />
                <img src={StarsProject} alt="etoiles" />
            </div>
            <div className="images-carousel">
                {project.images.map((img, index) => (
                    <img
                        key={index}
                        src={`/projects/aboueb_beat_tape/${img}`}
                        alt={`${project.title} ${index + 1}`}
                        className="carousel-item"
                    />
                ))}
            </div>
        </main>
    );
}
