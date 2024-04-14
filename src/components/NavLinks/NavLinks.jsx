import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="nav-links">
      <Link to="/" className="link">
        <div className="nav-link">
          <span>/home</span>
        </div>
      </Link>

      <span>|</span>

      <Link to="/about" className="link">
        <div className="nav-link">
          <span>/about</span>
        </div>
      </Link>

      <span>|</span>

      <Link to="/projects" className="link">
        <div className="nav-link">
          <span>/projects</span>
        </div>
      </Link>

      <span>|</span>

      <Link to="/contact" className="link">
        <div className="nav-link">
          <span>/contact</span>
        </div>
      </Link>

      <span>|</span>

      <Link to="/cat_game" className="link">
        <div className="nav-link">
          <span>/cat_game</span>
        </div>
      </Link>
    </div>
  );
}

export default NavLinks;
