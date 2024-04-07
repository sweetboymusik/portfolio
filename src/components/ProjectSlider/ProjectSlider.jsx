import "./ProjectSlider.css";
import CardSmall from "../CardSmall/CardSmall";
import { IoGameController } from "react-icons/io5";
import { FaRecordVinyl } from "react-icons/fa6";
import {} from "react-icons/fa6";

function ProjectSlider() {
  return (
    <div className="project-slider">
      <CardSmall
        title="/wordle_clone"
        icon={<IoGameController />}
        tags={[
          { label: "JS", color: "#D18A8E" },
          { label: "HTML", color: "#7E8BBB" },
          { label: "CSS", color: "#E3C066" },
        ]}
        desc="A clone of the popular word game Wordle. Created with vanilla JavaScript."
      />

      <CardSmall
        title="/nest_music"
        icon={<FaRecordVinyl />}
        tags={[{ label: "React", color: "#7E8BBB" }]}
        desc="Music app created in React, using json-db. Team project for 2024 winter semester."
      />
    </div>
  );
}

export default ProjectSlider;
