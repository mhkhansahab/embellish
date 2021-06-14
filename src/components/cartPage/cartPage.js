import React from 'react';
import "./cartPage.css";
import CartPageTile from '../../atoms/cartPageTile/cartPageTile';

function cartPage() {
    return (
        <div className="cart-page-container">
            <div className="cart-page-header flex center-1 center-2">Shopping Cart</div>
            <CartPageTile></CartPageTile>
            <CartPageTile></CartPageTile>
            <CartPageTile></CartPageTile>
            <CartPageTile></CartPageTile>
        </div>
    );
}

export default cartPage;
