import "./Nav.css";
import NavLogo from "../NavLogo/NavLogo";
import NavLinks from "../NavLinks/NavLinks";

function NavBar({ navColor, setNavColor }) {
  return (
    <nav style={{ backgroundColor: navColor }}>
      <div className="nav-content">
        <NavLogo />
        <NavLinks setNavColor={setNavColor} />
      </div>
    </nav>
  );
}

export default NavBar;
