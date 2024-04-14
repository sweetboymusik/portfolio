import "./HomeProjects.css";
import { FaFolderOpen } from "react-icons/fa6";
import ProjectSlider from "../ProjectSlider/ProjectSlider";

function HomeProjects({ projects }) {
  return (
    <section className="home-projects">
      <section className="home-projects-top">
        <div className="home-projects-title text-medium">
          <h3>/projects</h3>
        </div>

        <div className="home-projects-content">
          <p className="home-projects-para">
            View a catalog of my programming work/projects. See the slider below
            for a preview of some of my favourites!
          </p>
        </div>
      </section>

      <div className="home-projects-content">
        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default HomeProjects;
