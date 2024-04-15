import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PageHome from "./components/PageHome/PageHome";
import PageAbout from "./components/PageAbout/PageAbout";
import PageProjects from "./components/PageProjects/PageProjects";
import PageContact from "./components/PageContact/PageContact";
import CatGame from "./components/CatGame/CatGame";

function App() {
  let [projects, setProjects] = useState([
    {
      id: 1,
      title: "/wordle_clone",
      description:
        "A clone of the popular word game Wordle. Created with vanilla JavaScript.",
      icon: "FaSomethin",
      tags: [
        { label: "JS", color: "#7D8BBB" },
        { label: "CSS", color: "#7D8BBB" },
        { label: "HTML", color: "#7D8BBB" },
      ],
      img: "wordle.png",
      url: "https://github.com/sweetboymusik/trinkets",
      alt: "wordle clone screenshot",
    },
    {
      id: 2,
      title: "/chat_nest",
      description:
        "A recreation of Twitter (now X), with basic funtionality. Group project.",
      icon: "FaGame",
      tags: [
        { label: "JS", color: "#7D8BBB" },
        { label: "CSS", color: "#7D8BBB" },
        { label: "HTML", color: "#7D8BBB" },
      ],
      img: "chat_nest.png",
      url: "https://github.com/sweetboymusik/sprint1_feb2024",
      alt: "chat_nest screenshot",
    },
    {
      id: 3,
      title: "/company_management_CLI",
      description: "Mock company management CLI system.  Group project.",
      icon: "FaGame",
      tags: [{ label: "Python", color: "#7D8BBB" }],
      img: "company.png",
      url: "https://github.com/sweetboymusik/SD10-Project-2-Robot-Group-3",
      alt: "company management system screenshot",
    },

    {
      id: 4,
      title: "/drum_machine",
      description:
        "Inspired by the TR-808 drum machine, using JS web audio API.",
      icon: "FaGame",
      tags: [
        { label: "JS", color: "#7D8BBB" },
        { label: "CSS", color: "#7D8BBB" },
        { label: "HTML", color: "#7D8BBB" },
      ],
      img: "drum_machine.png",
      url: "https://github.com/sweetboymusik/trinkets",
      alt: "drum machine screenshot",
    },
  ]);
  let [smallProjects, setSmallProjects] = useState([
    {
      id: 1,
      title: "/wordle_clone",
      description:
        "A clone of the popular word game Wordle. Created with vanilla JavaScript.",
      icon: "FaSomethin",
      tags: [
        { label: "JS", color: "#7D8BBB" },
        { label: "CSS", color: "#7D8BBB" },
        { label: "HTML", color: "#7D8BBB" },
      ],
      img: "wordle.png",
      url: "https://github.com/sweetboymusik/trinkets",
      alt: "wordle clone screenshot",
    },
    {
      id: 2,
      title: "/chat_nest",
      description:
        "A recreation of Twitter (now X), with basic funtionality. Group project.",
      icon: "FaGame",
      tags: [
        { label: "JS", color: "#7D8BBB" },
        { label: "CSS", color: "#7D8BBB" },
        { label: "HTML", color: "#7D8BBB" },
      ],
      img: "chat_nest.png",
      url: "https://github.com/sweetboymusik/sprint1_feb2024",
      alt: "chat_nest screenshot",
    },
    {
      id: 3,
      title: "/company_management_CLI",
      description: "Mock company management CLI system.  Group project.",
      icon: "FaGame",
      tags: [{ label: "Python", color: "#7D8BBB" }],
      img: "company.png",
      url: "https://github.com/sweetboymusik/SD10-Project-2-Robot-Group-3",
      alt: "company management system screenshot",
    },

    {
      id: 4,
      title: "/drum_machine",
      description:
        "Inspired by the TR-808 drum machine, using JS web audio API.",
      icon: "FaGame",
      tags: [
        { label: "JS", color: "#7D8BBB" },
        { label: "CSS", color: "#7D8BBB" },
        { label: "HTML", color: "#7D8BBB" },
      ],
      img: "drum_machine.png",
      url: "https://github.com/sweetboymusik/trinkets",
      alt: "drum machine screenshot",
    },
  ]);
  let [navColor, setNavColor] = useState("#E3C066");

  function scrollToTop() {
    window.scroll(0, 0);
  }

  return (
    <Router>
      <NavBar navColor={navColor} setNavColor={setNavColor} />

      <div className="page-content">
        <Routes>
          <Route
            path="/"
            element={
              <PageHome
                projects={smallProjects}
                setProjects={setSmallProjects}
                onClick={scrollToTop}
              />
            }
          />
          <Route path="/about" element={<PageAbout onClick={scrollToTop} />} />
          <Route
            path="/projects"
            element={<PageProjects projects={projects} />}
          />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/cat_game" element={<CatGame />} />
        </Routes>
      </div>

      <div className="footer-spacer"></div>
      <Footer />
    </Router>
  );
}

export default App;
