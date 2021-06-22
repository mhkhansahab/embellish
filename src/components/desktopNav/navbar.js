import Logo from "./../../assets/logo-black.png";
import NavLink from "./../../atoms/navlink/navlink";
import "./navbar.css";
import "./../../styles/media-queries/responsive-navbar.css";
import { Link } from "react-router-dom";

function navbar(props) {
  return (
    <nav className="navbar flex">
      <span className="logo-container">
        <Link to="/">
          <img src={Logo} alt="Embellish Logo"></img>
        </Link>
      </span>
      <span className="right-nav flex center-1">
        <NavLink name="Categories"></NavLink>
        <Link to="/cart" style={{ color: "black", textDecoration: "none" }}>
          <span className="nav-icon flex">
            <i className="fas fa-shopping-cart"></i>
          </span>
        </Link>
        <span className="nav-icon flex">
          <i className="fas fa-search search-icon"></i>
        </span>
      </span>
      <span className="menu-container" onClick={props.clicked}>
        <i className="fas fa-bars menu-icon"></i>
      </span>
      <span className="search-container">
        <i className="fas fa-search search-icon"></i>
      </span>
    </nav>
  );
}

export default navbar;
