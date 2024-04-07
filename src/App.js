import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PageHome from "./components/PageHome/PageHome";
import PageAbout from "./components/PageAbout/PageAbout";
import PageProjects from "./components/PageProjects/PageProjects";
import PageContact from "./components/PageContact/PageContact";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/home" element={<PageHome />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/projects" element={<PageProjects />} />
        <Route path="/contact" element={<PageContact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
