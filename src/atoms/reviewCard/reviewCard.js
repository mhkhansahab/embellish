import React from 'react';
import "./reviewCard.css";

function reviewCard(props) {
    return (
        <div className="review-card">
            <div>
                <div style={{backgroundImage : "url(" + props.url +")" }}></div>
                <div>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
            <div>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </div>
        </div>
    )
};

export default reviewCard;
