import { useState } from "react";
import projects from "../object/projects_objects.json";
import StarsProject from "../data/graphic_element/ÉTOILES_PROJET.svg";
import Marquee from "./marquee_project";

export default function ProjectsDisplay() {

    const [selectedKey, setSelectedKey] = useState("aboueb_beat_tape");
    const selectedProject = projects[selectedKey];

    return(
        <main>
            <div className="detail">
                <Marquee projects={projects} onSelectProject={setSelectedKey}/>
                <h1>{selectedProject.title}</h1>
                <h4>{selectedProject.date}</h4>
                <br />
                <p>{selectedProject.description}</p>
                <br />
                <img src={StarsProject} alt="etoiles" />
            </div>
            <div className="images-carousel">
                {selectedProject.images.map((file, index) => {
                    const isVideo = file.endsWith(".mp4") || file.endsWith(".mov");

                    return isVideo ? (
                    <video
                        key={index}
                        src={`/projects/${selectedKey}/${file}`}
                        controls
                        className="carousel-item"
                    />
                    ) : (
                    <img
                        key={index}
                        src={`/projects/${selectedKey}/${file}`}
                        alt={`${selectedProject.title} ${index + 1}`}
                        className="carousel-item"
                    />
                    );
                })}
            </div>
        </main>
    );
}
