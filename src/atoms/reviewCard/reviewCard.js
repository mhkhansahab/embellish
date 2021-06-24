import React from 'react';
import "./reviewCard.css";

function reviewCard(props) {
    return (
        <div className="review-card">
            <div className="review">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </div>
            <div className="review-by">- Salman Ahmed</div>
            <div className="review-rating">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            </div>
        </div>
    )
};

export default reviewCard;
