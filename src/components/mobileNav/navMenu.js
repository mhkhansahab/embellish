import React from "react";
import "./navMenu.css";

const navMenu = (props)=>{
    return(
        <div className="nav-menu">
            <ul className="flex">
                <li className = "menu-items">Home</li>
                <li className = "menu-items">Browse Products</li>
                <li className = "menu-items">Find a Store</li>
                <li className = "menu-items">About Us</li>
                <li className = "menu-items">Contact Us</li>
            </ul>
            <span className="cancel-container" onClick={props.clicked}><i className="fas fa-times cancel-icon"></i></span>
        </div>
    );
}

export default navMenu;