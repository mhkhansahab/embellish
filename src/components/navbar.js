import Logo from "./../assets/embellish-logo.jpeg";
import NavLink from "./../atoms/navlink";
import "./../styles/navbar.css";
import "./../styles/media-queries/responsive-navbar.css";


function navbar(props){
    return(
    <nav className="navbar flex">
            <span className="left-nav flex">
                <NavLink name="Home"></NavLink>
                <NavLink name="About Us"></NavLink>
                <NavLink name="Contact Us"></NavLink>
               
            </span>
            <span className="logo-container"><img src={Logo} alt="Embellish Logo"></img></span>
            <span className="right-nav flex">
                <NavLink name="Browse Products"></NavLink>
                <NavLink name="Find a Store"></NavLink>
            </span>
            <span className="menu-container" onClick={props.clicked}><i className="fas fa-bars menu-icon"></i></span>
            <span className="search-container"><i className="fas fa-search search-icon"></i></span>
      </nav>
    )
}

export default navbar;