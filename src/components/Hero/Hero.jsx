import "./Hero.css";
import Button from "../Button/Button";
import heroImg from "../../assets/hero-img.png";

import {
  FaGithub,
  FaFigma,
  FaLinkedin,
  FaGit,
  FaDownload,
} from "react-icons/fa6";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <div className="hero-title">
              <h1 className="text-large">
                <span className="text-light">Hi there, I'm</span> <br /> Elliott
                Young.
              </h1>

              <h2 className="text-medium">
                <span className="text-light">I'm a</span> software developer.
              </h2>
            </div>

            <p className="text-small text-light hero-paragraph">
              Currently studying software development at Keyin College. Focusing
              on web development. Based in Newfoundland, Canada.
            </p>
          </div>
          <img className="hero-img" src={heroImg} alt="" />
        </div>
        <div className="hero-buttons">
          <Button
            color="#D18A8E"
            icon={<FaGithub />}
            text="Github"
            size={{ width: "200px", height: "48px" }}
            path="https://github.com/sweetboymusik"
          />
          <Button
            color="#7E8BBB"
            icon={<FaFigma />}
            text="Figma"
            size={{ width: "200px", height: "48px" }}
            path="https://www.figma.com/@elliottbutt"
          />
          <Button
            color="#E3C066"
            icon={<FaLinkedin />}
            text="Linkedin"
            size={{ width: "200px", height: "48px" }}
            path="https://www.figma.com/@elliottbutt"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
