import "./PageAbout.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { SiVisualstudiocode } from "react-icons/si";
import { SiVim } from "react-icons/si";
import { SiNeovim } from "react-icons/si";
import sherlock from "../../assets/sherlock.jpg";
import watson from "../../assets/watson.jpg";
import puss from "../../assets/puss.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaAws,
  FaNodeJs,
} from "react-icons/fa6";
import AboutEduCard from "../AboutEduCard/AboutEduCard";
import AboutWorkCard from "../AboutWorkCard/AboutWorkCard";

function PageAbout() {
  return (
    <main className="about-main">
      <section className="about-text">
        <h1>/background</h1>
        <div className="about-article">
          <p>
            Starting with a music degree from Memorial University of
            Newfoundland, my educational journey has been rich and diverse. Now,
            as I immerse myself in software development at Keyin College, I
            continue to nurture my passion for learning. Beyond formal
            education, I explore subjects like astronomy, languages,
            programming, and art, embracing growth as an ongoing journey.
          </p>
          <p>
            Proficient across a spectrum of musical instruments - guitar, bass,
            drums, piano, and vocals - I've cultivated my skills through
            dedicated practice. Composition is where I truly come alive,
            especially when leveraging computer software to breathe life into my
            musical ideas. Armed with a degree in music from MUN, I'm fascinated
            by the fusion of music and technology, constantly innovating in this
            dynamic intersection.
          </p>
          <p>
            My foray into programming sparked during my university days, where
            computer science emerged as a compelling path. Since then, I've
            ventured into hobbyist game development and pursued self-learning in
            C# and JavaScript. Enrolled in Keyin College's software development
            program, I'm excited to blend my love for learning with practical
            skills, poised to thrive in the ever-evolving tech industry.
          </p>
        </div>
      </section>

      <span className="home-divider-container">
        <hr className="home-divider-small" />
      </span>

      <section className="about-text">
        <h2>/cats</h2>
        <p>Here are my cats. =^_^=</p>
        <div className="cats">
          <img className="cat" src={sherlock} alt="My cat Sherlock" />
          <img className="cat" src={watson} alt="My cat Watson" />
          <img className="cat" src={puss} alt="My cat Puss" />
        </div>

        <p>
          Want more cats? Play my&nbsp;
          <Link className="about-page-link" to="/cat_game">
            cat game!
          </Link>
        </p>
      </section>

      <span className="home-divider-container">
        <hr className="home-divider-small" />
      </span>

      <section className="about-text about-resume">
        <header>
          <h1>/resume</h1>
        </header>
        <h3># technology</h3>
        <div className="resume-skills">
          <ul>
            <li>
              <FaReact />
              <span>React</span>
            </li>
            <li>
              <FaJs />
              <span>JavaScript</span>
            </li>
            <li>
              <FaHtml5 />
              <span>HTML</span>
            </li>
            <li>
              <FaCss3Alt />
              <span>CSS</span>
            </li>
            <li>
              <FaPython />
              <span>Python</span>
            </li>
            <li>
              <SiVisualstudiocode />
              <span>VS Code</span>
            </li>
            <li>
              <SiNeovim />
              <span>Neovim</span>
            </li>
            <li>
              <SiVim />
              <span>Vim</span>
            </li>
            <li>
              <FaNodeJs />
              <span>Node.js</span>
            </li>
            <li>
              <FaAws />
              <span>AWS</span>
            </li>
          </ul>
        </div>
        <h3># education</h3>
        <div className="resume-edu">
          <AboutEduCard
            program={"Bachelor of Music"}
            school={"Memorial University of Newfoundland"}
            date={"Sept 2009 - May 2013"}
          />
          <AboutEduCard
            program={"Software Development"}
            school={"Keyin College"}
            date={"Sept 2023 -  Dec 2024"}
          />
        </div>
        <h3># work</h3>
        <div className="resume-work">
          <AboutWorkCard
            position={"Music Composer"}
            employer={"Self-employed"}
            date={"Oct 2018 - Present"}
          />
          <AboutWorkCard
            position={"Audio Editor"}
            employer={"Self-employed"}
            date={"Oct 2018 - Present"}
          />
          <AboutWorkCard
            position={"Private Music Teacher"}
            employer={"Self-employed"}
            date={"Oct 2018 - Dec 2023"}
          />
          <AboutWorkCard
            position={"Office Manager"}
            employer={"Fred's Records"}
            date={"July 2014 - June 2017"}
          />
        </div>
      </section>
    </main>
  );
}

export default PageAbout;
