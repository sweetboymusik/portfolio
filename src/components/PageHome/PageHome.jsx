import Hero from "../Hero/Hero";
import ProjectSlider from "../ProjectSlider/ProjectSlider";

function PageHome() {
  return (
    <div className="page-home">
      <Hero />
      <hr />
      <ProjectSlider />
    </div>
  );
}

export default PageHome;
