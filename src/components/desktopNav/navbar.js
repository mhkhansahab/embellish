import Logo from "./../../assets/logo-black.png";
import NavLink from "./../../atoms/navlink/navlink";
import "./navbar.css";
import "./../../styles/media-queries/responsive-navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(props) {
  const categories = useSelector((state) => state.categoryReducer.categories);

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
              {categories
                ? categories.map((category) => {
                    return (
                      <Link
                        key={category._id}
                        to={"/productlist?category=" + category.value}
                        className="nav-item"
                      >
                        <li>{category.name}</li>
                      </Link>
                    );
                  })
                : null}
            </ul>
          </div>
        </span>
        <Link to="/cart" className="nav-item">
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

export default Navbar;
