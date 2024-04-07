import "./App.css";
import projectsData from "./data/projects.json";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PageHome from "./components/PageHome/PageHome";
import PageAbout from "./components/PageAbout/PageAbout";
import PageProjects from "./components/PageProjects/PageProjects";
import PageContact from "./components/PageContact/PageContact";

function App() {
  let [projects, setProjects] = useState();
  useEffect(() => setProjects(projectsData), []);

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/home" element={<PageHome projects={projects} />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/projects" element={<PageProjects />} />
        <Route path="/contact" element={<PageContact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
