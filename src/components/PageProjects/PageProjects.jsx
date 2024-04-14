import "./PageProjects.css";
import ProjectGrid from "../ProjectGrid/ProjectGrid";

function PageProjects({ projects }) {
  return (
    <main className="page-projects">
      <div className="projects-project-grid">
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}

export default PageProjects;
