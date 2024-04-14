import "./CardLarge.css";
import CardTag from "../CardTag/CardTag";
import Button from "../Button/Button";
import { FaGithub } from "react-icons/fa6";

function CardLarge({ project }) {
  return (
    <div className="card-large">
      <header className="card-section card-top">
        <h3>{project.title}</h3>
      </header>

      <div className="card-middle">
        <img
          src={require(`../../assets/projects/${project.img}`)}
          alt={project.alt}
          className="card-img"
        />
      </div>

      <p>{project.description}</p>

      <div className="card-section">
        <div className="card-tags">
          {project.tags.map((tag, index) => (
            <CardTag key={index} label={tag.label} color={tag.color} />
          ))}
        </div>

        <Button
          size={{ width: "88px", height: "32px" }}
          icon={<FaGithub />}
          color="#333"
          text="Github"
          path={project.url}
        ></Button>
      </div>
    </div>
  );
}

export default CardLarge;
