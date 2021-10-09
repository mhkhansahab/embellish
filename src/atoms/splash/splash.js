import React from 'react';
import "./splash.css";
import Logo from "./../../assets/logo-black.png";



function Splash() {
    return (
        <div className="splash">
            <div className="middle">
            <img src={Logo} className="splash_logo" alt=""></img>

            <br/><br/>

            <div class="col-3">
                <div data-title=".dot-flashing">
                <div >
                    <div className="dot-flashing"></div>
                </div>
                </div>
            </div>

            </div>

            

        </div>
    )
}

export default Splash
