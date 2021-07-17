import React from "react";
import "./navMenu.css";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const NavMenu = (props)=>{
    const categories = useSelector((state) => state.categoryReducer.categories);
    return(
        <div className="nav-menu">
            <ul className="flex">
            <div className="menu-items nav-menu-title">CATEGORIES</div>
            {categories
                ? categories.map((category) => {
                    return (
                      <Link
                        key={category._id}
                        to={"/productlist?category=" + category.value}
                        style={{textDecoration:"none", color:"white"}}
                      >
                        <li className ="menu-items">{category.name}</li>
                      </Link>
                    );
                  })
                : null}

                

                {/* <li className = "menu-items">Home</li>
                <li className = "menu-items">About Us</li>
                <li className = "menu-items">Contact Us</li> */}
            </ul>
            <span className="cancel-container" onClick={props.clicked}><i className="fas fa-times cancel-icon"></i></span>
        </div>
    );
}

export default NavMenu;