import React from 'react';
import "./productDetail.css";

function productDetail() {
    return (
        <div className="detail-container">
            <div className="title">Stylish Kurti</div>
            <div className="price">Rs. 4999</div>
            <div className="sizes"><b>Sizes : </b>Small, Large , Extra Large</div>
            <div className="add-btn">Add to Cart</div>
        </div>
    );
}

export default productDetail;
