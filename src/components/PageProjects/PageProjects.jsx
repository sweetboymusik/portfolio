import "./PageProjects.css";
import ProjectGrid from "../ProjectGrid/ProjectGrid";
import video from "../../assets/video.mp4";
import Button from "../Button/Button";
import { FaGithub } from "react-icons/fa6";

function PageProjects({ projects }) {
  return (
    <main className="page-projects">
      <section className="page-section">
        <header>
          <h1>/featured_project</h1>
        </header>

        <div className="projects-featured">
          <h2>/nest_music</h2>
          <video className="project-video" src={video} controls></video>
          <p>
            Music app created in React, inspired by Spotify, YouTube Music, and
            Apple music. Created for our winter 2024 final sprint project. Group
            project.
          </p>

          <div className="featured-bottom">
            <div className="project-big-tag">React</div>
            <Button
              text={"Github"}
              icon={<FaGithub />}
              size={{ width: "200px" }}
              path="https://github.com/sweetboymusik/nest-music"
            />
          </div>
        </div>
      </section>

      <span className="home-divider-container">
        <hr className="home-divider-small" />
      </span>

      <section className="page-section">
        <header>
          <h1>/other_projects</h1>
        </header>
        <div className="projects-project-grid">
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}

export default PageProjects;
