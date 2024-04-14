import "./HomeProjects.css";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ProjectSlider from "../ProjectSlider/ProjectSlider";

function HomeProjects({ projects, onClick, setProjects }) {
  return (
    <section className="page-section">
      <Link className="project-link" to="/projects" onClick={onClick}>
        <div className="home-projects-title text-medium">
          <h3>/projects</h3>
          <FaArrowAltCircleRight />
        </div>
      </Link>

      <div className="home-section-centered">
        <p className="home-projects-para">
          View a catalog of my programming work/projects. See the slider below
          or click the button above to see more!
        </p>
        <div className="home-projects-content">
          <ProjectSlider projects={projects} setProjects={setProjects} />
        </div>
      </div>
    </section>
  );
}

export default HomeProjects;
