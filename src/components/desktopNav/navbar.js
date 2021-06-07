import Logo from "./../../assets/embellish-logo-2.png";
import NavLink from "./../../atoms/navlink/navlink";
import "./navbar.css";
import "./../../styles/media-queries/responsive-navbar.css";


function navbar(props){
    return(
    <nav className="navbar flex">
            <span className="logo-container"><img src={Logo} alt="Embellish Logo"></img></span>
            <span className="right-nav flex center-1">
                <NavLink name="Categories"></NavLink>
                <span className="nav-icon flex"><i className="fas fa-shopping-cart"></i></span>
                <span className="nav-icon flex"><i className="fas fa-search search-icon"></i></span>
            </span>
            <span className="menu-container" onClick={props.clicked}><i className="fas fa-bars menu-icon"></i></span>
            <span className="search-container"><i className="fas fa-search search-icon"></i></span>
      </nav>
    )
}

export default navbar;