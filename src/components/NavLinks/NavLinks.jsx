import { Link } from "react-router-dom";

import {
  FaHouse,
  FaFolderOpen,
  FaAddressCard,
  FaEnvelope,
} from "react-icons/fa6";

function NavLinks() {
  return (
    <div className="nav-links">
      <Link to="/home" className="link">
        <div className="nav-link">
          <FaHouse />
          <span>/home</span>
        </div>
      </Link>

      <span>|</span>

      <Link to="/about" className="link">
        <div className="nav-link">
          <FaAddressCard />
          <span>/about</span>
        </div>
      </Link>

      <span>|</span>

      <Link to="/projects" className="link">
        <div className="nav-link">
          <FaFolderOpen />
          <span>/projects</span>
        </div>
      </Link>

      <span>|</span>

      <Link to="/contact" className="link">
        <div className="nav-link">
          <FaEnvelope />
          <span>/contact</span>
        </div>
      </Link>
    </div>
  );
}

export default NavLinks;
