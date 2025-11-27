import { useRef, useEffect } from "react";
import StarsProject from "../data/graphic_element/ÉTOILES_PROJET.svg";

export default function ProjectsDisplay({ selectedProject, selectedKey }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTop = 0;
    }
  }, [selectedKey]);
  return (
    <main>
      <div className="detail">
        <h1>{selectedProject.title}</h1>
        <h4>{selectedProject.date}</h4>
        <br />
        <p>{selectedProject.description}</p>
        <br />
        <img src={StarsProject} alt="etoiles" />
      </div>
      <div className="images-carousel" ref={carouselRef}>
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
