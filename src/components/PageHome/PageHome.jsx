import Hero from "../Hero/Hero";
import ProjectGrid from "../ProjectGrid/ProjectGrid";
import ProjectSlider from "../ProjectSlider/ProjectSlider";

function PageHome({ projects }) {
  console.log(projects);
  return (
    <div className="page-home">
      <Hero />
      <hr />
      <ProjectGrid projects={projects} />
    </div>
  );
}

export default PageHome;
