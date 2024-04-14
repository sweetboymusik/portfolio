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
  let [navColor, setNavColor] = useState("#ddd");

  useEffect(() => setProjects(projectsData), []);
  useEffect(() => setAbout(aboutData), []);

  return (
    <Router>
      <NavBar navColor={navColor} setNavColor={setNavColor} />

      <div className="page-content">
        <Routes>
          <Route path="/home" element={<PageHome projects={projects} />} />
          <Route path="/about" element={<PageAbout content={about} />} />
          <Route
            path="/projects"
            element={<PageProjects projects={projects} />}
          />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/cat_game" element={<CatGame />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
