import { Link } from "react-router-dom";

import {
  FaHouse,
  FaFolderOpen,
  FaAddressCard,
  FaEnvelope,
} from "react-icons/fa6";

import { FaGamepad } from "react-icons/fa6";

function NavLinks({ setNavColor }) {
  return (
    <div className="nav-links">
      <Link
        onClick={() => {
          setNavColor("#ddd");
        }}
        to="/home"
        className="link"
      >
        <div className="nav-link">
          <span>/home</span>
        </div>
      </Link>

      <span>|</span>

      <Link
        onClick={() => {
          setNavColor("#D18A8E");
        }}
        to="/about"
        className="link"
      >
        <div className="nav-link">
          <span>/about</span>
        </div>
      </Link>

      <span>|</span>

      <Link
        onClick={() => {
          setNavColor("#7D8BBB");
        }}
        to="/projects"
        className="link"
      >
        <div className="nav-link">
          <span>/projects</span>
        </div>
      </Link>

      <span>|</span>

      <Link
        onClick={() => {
          setNavColor("#E3C066");
        }}
        to="/contact"
        className="link"
      >
        <div className="nav-link">
          <span>/contact</span>
        </div>
      </Link>

      <span>|</span>

      <Link
        onClick={() => {
          setNavColor("#E3C066");
        }}
        to="/cat_game"
        className="link"
      >
        <div className="nav-link">
          <span>/cat_game</span>
        </div>
      </Link>
    </div>
  );
}

export default NavLinks;
