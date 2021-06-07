import React from 'react';
import "./modal.css";

const modal=(props)=> {
    return (
        <div className="modal-container">
            <div className="modal flex center-1 center-2">
                <div>Select Your Country</div>
                <div>
                    <select>
                        <option value="pakistan">Pakistan</option>
                        <option value="india">India</option>
                        <option value="uae">United Arab Emirates</option>
                    </select>
                </div>
                <div className="modal-btn" onClick={props.countrySelector}>Done</div>
            </div>
        </div>
    );
}

export default modal;