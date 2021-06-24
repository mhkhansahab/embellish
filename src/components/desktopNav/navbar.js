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
        <span className="categories-link">
          <NavLink name="Categories"></NavLink>
          <div className="drawer">
            <ul>
              <li>Luckhnowi Poshak</li>
              <li>Indo-Western</li>
              <li>Traditional-Wears</li>
              <li>Formals</li>
              <li>Beauty</li>
              <li>Accessories</li>
              <li>Shoes</li>
            </ul>
          </div>
        </span>
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
