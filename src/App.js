import "./App.css";
import projectsData from "./data/projects.json";
import aboutData from "./data/about.json";
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
  let [projects, setProjects] = useState();
  let [about, setAbout] = useState();
  let [navColor, setNavColor] = useState("#E3C066");

  useEffect(() => setProjects(projectsData), []);
  useEffect(() => setAbout(aboutData), []);

  function scrollToTop() {
    console.log("scrolling");
    window.scroll(0, 0);
  }

  return (
    <Router>
      <NavBar navColor={navColor} setNavColor={setNavColor} />

      <div className="page-content">
        <Routes>
          <Route
            path="/home"
            element={<PageHome projects={projects} onClick={scrollToTop} />}
          />
          <Route
            path="/about"
            element={<PageAbout content={about} onLoad={scrollToTop} />}
          />
          <Route
            path="/projects"
            element={<PageProjects projects={projects} onLoad={scrollToTop} />}
          />
          <Route
            path="/contact"
            element={<PageContact onLoad={scrollToTop} />}
          />
          <Route path="/cat_game" element={<CatGame onLoad={scrollToTop} />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
