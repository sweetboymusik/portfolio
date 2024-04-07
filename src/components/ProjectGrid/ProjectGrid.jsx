import "./ProjectGrid.css";
import CardLarge from "../CardLarge/CardLarge";

function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <CardLarge key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGrid;
