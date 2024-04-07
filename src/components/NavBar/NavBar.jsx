import "./Nav.css";
import NavLogo from "../NavLogo/NavLogo";
import NavLinks from "../NavLinks/NavLinks";

function NavBar() {
  return (
    <nav>
      <NavLogo />
      <NavLinks />
    </nav>
  );
}

export default NavBar;
