import "./ProjectSlider.css";
import CardSmall from "../CardSmall/CardSmall";
import { IoGameController } from "react-icons/io5";
import { FaRecordVinyl } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

function ProjectSlider({ projects }) {
  let [slide, setSlide] = useState(false);
  let [nextProj, setNextProj] = useState([...projects]);
  let [currentProj, setCurrentProj] = useState([]);
  let [index, setIndex] = useState();
  let [style, setStyle] = useState({
    opacity: "100%",
    transform: "translateX(0px)",
  });

  function changeProjects() {
    let projs = nextProj;
    currentProj.forEach((project) => projs.push(project));
    let splice = projs.splice(0, 2);
    setCurrentProj(splice);
    setNextProj(projs);
  }

  useEffect(() => {
    let projs = nextProj.splice(0, 2);
    setCurrentProj(projs);
  }, []);

  function getNextCards() {
    setStyle({ opacity: "0", transform: "translateX(-750px)" });
    setTimeout(() => {
      setStyle({ opacity: "0", transform: "translateX(750px)" });
    }, 230);

    setTimeout(() => {
      changeProjects();
      setStyle({ opacity: "100%", transform: "translateX(0px)" });
    }, 500);
  }

  function getPrevCards() {
    setStyle({ opacity: "0", transform: "translateX(750px)" });
    setTimeout(() => {
      setStyle({ opacity: "0", transform: "translateX(-750px)" });
    }, 230);

    setTimeout(() => {
      changeProjects();
      setStyle({ opacity: "100%", transform: "translateX(0px)" });
    }, 500);
  }

  return (
    <div className="project-slider">
      <button onClick={getPrevCards} className="project-next">
        <FaChevronLeft className="" />
      </button>

      <div className="project-slider-mask">
        <div className="project-slider-content" style={style}>
          {currentProj.map((project, index) => (
            <CardSmall
              key={index}
              title={project.title}
              icon={project.icon}
              tags={project.tags}
              desc={project.description}
            />
          ))}
        </div>
      </div>

      <button onClick={getNextCards} className="project-next">
        <FaChevronRight className="" />
      </button>
    </div>
  );
}

export default ProjectSlider;
