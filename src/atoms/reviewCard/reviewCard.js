import React from 'react';
import "./reviewCard.css";

function reviewCard({details}) {
    return (
        <div className="review-card">
            <div className="review">
            {details.text}
            </div>
            <div className="review-by">- {details.username}</div>
            <div style={{textAlign:"right"}}>
            {
                details.stars === 5 ? (
                    <div className="review-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                ) : details.stars === 4 ? (
                    <div className="review-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                ) : details.stars === 3 ? (
                    <div className="review-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                ) : details.stars === 2 ? (
                    <div className="review-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                ) : details.stars === 1 ? (
                    <div className="review-rating">
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                ) :null
            }
            </div>
        </div>
    )
};

export default reviewCard;
