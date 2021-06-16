import React from 'react';
import "./productDetail.css";

function productDetail() {
    return (
        <div className="detail-container">
            <div className="title">Stylish Kurta</div>
            <div className="price">Rs. 4999</div>
            <div className="sizes">
                <div className="box-title">Sizes</div>
                <div className="box-container flex center-1 center-2">
                    <div className="box flex center-1 center-2">S</div>
                    <div className="box flex center-1 center-2">M</div>
                    <div className="box flex center-1 center-2">L</div>
                    <div className="box flex center-1 center-2">XL</div>
                </div>
                <div className="box-title">Colors</div>
                <div className="box-container flex center-1 center-2">
                    <div className="color-box flex center-1 center-2">Blue</div>
                    <div className="color-box flex center-1 center-2">Black</div>
                    <div className="color-box flex center-1 center-2">Red</div>
                    <div className="color-box flex center-1 center-2">Green</div>
                </div>
            </div>
            <div className="add-btn">Add to Cart</div>
        </div>
    );
}

export default productDetail;
