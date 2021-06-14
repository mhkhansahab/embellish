import React from 'react';
import "./cartPageTile.css";
import image from "./../../assets/tile-images/1.jpg"


function cartPageTile() {
    return (
        <div className="cart-page-tile">
            <div className="cart-page-tile-img" style={{backgroundImage: 'url('+ image +')'}}></div>
            <div>
                <div>Aurel</div>
                <div>Type: Slim Fit</div>
                <div>Size: S</div>
            </div>
        </div>
    );
}

export default cartPageTile;
