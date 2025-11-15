import { useState } from "react";
import Menu from "../components/menu";
import Marquee from "../components/marquee_project";
import ProjectsDisplay from "../components/projects_display";
import projects from "../object/projects_objects.json";

export default function Projects() {
  const [selectedKey, setSelectedKey] = useState("aboueb_beat_tape");
  const selectedProject = projects[selectedKey];

  return (
    <div className="Page ProjectsPage">
      <Menu isHome={false} isAbout={false} isProject={true} />
      <Marquee onSelectProject={setSelectedKey} />
      <ProjectsDisplay
        selectedProject={selectedProject}
        selectedKey={selectedKey}
      />
    </div>
  );
}
