import "./PageHome.css";
import Hero from "../Hero/Hero";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeContact from "../HomeContact/HomeContact";
import HomeProjects from "../HomeProjects/HomeProjects";

function PageHome({ projects }) {
  console.log(projects);
  return (
    <div className="page-home">
      <Hero />

      <hr className="home-divider" />

      <div className="home-sections">
        <HomeAbout />
        <span className="home-divider-container">
          <hr className="home-divider-small" />
        </span>
        <HomeProjects projects={projects} />
        <span className="home-divider-container">
          <hr className="home-divider-small" />
        </span>
        <HomeContact />
      </div>
    </div>
  );
}

export default PageHome;
