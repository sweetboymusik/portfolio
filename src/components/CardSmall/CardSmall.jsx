import "./CardSmall.css";
import { FaGithub } from "react-icons/fa6";
import CardTag from "../CardTag/CardTag";
import Button from "../Button/Button";

function CardSmall({ title, icon, tags, desc }) {
  return (
    <div className="card-small">
      <header className="card-section card-top">
        <h3>{title}</h3>
      </header>

      <p>{desc}</p>

      <div className="card-section">
        <div className="card-tags">
          {tags.map((tag, index) => (
            <CardTag key={index} label={tag.label} color={tag.color} />
          ))}
        </div>
        <Button
          size={{ width: "96px", height: "32px" }}
          icon={<FaGithub />}
          color="#333"
          text="Github"
        ></Button>
      </div>
    </div>
  );
}

export default CardSmall;
