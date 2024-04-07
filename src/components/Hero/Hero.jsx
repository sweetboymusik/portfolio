import heroBackground from "../../assets/hero-bg.png";
import "./Hero.css";
import Button from "../Button/Button";

import { FaGithub, FaFigma, FaLinkedin, FaGit, FaLink } from "react-icons/fa6";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-title">
          <h1 className="text-large">
            <span className="text-light">Hi there, I'm</span> <br /> Elliott
            Young.
          </h1>

          <h2 className="text-medium">
            <span className="text-light">I'm a</span> software developer.
          </h2>
        </div>

        <p className="text-small text-light">
          Currently studying software development at Keyin College. Focusing on
          web development. Based in Newfoundland, Canada.
        </p>

        <div className="hero-buttons">
          <Button color="#D18A8E" icon={<FaGithub />} text="Github" />
          <Button color="#7E8BBB" icon={<FaFigma />} text="Figma" />
          <Button color="#E3C066" icon={<FaLinkedin />} text="Linkedin" />
        </div>
      </div>
      <div className="hero-right"></div>
      <img
        src={heroBackground}
        alt="blue-pink-yellow gradient"
        className="hero-bg"
      />
    </div>
  );
}

export default Hero;
