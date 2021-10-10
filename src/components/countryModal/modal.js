import React from 'react';
import "./modal.css";

const modal=(props)=> {
    return (
        <div className="modal-container">
            <div className="modal flex center-1 center-2">
                <div>Select Your Country</div>
                <div>
                    <select value={props.Country} onChange={(e)=>props.setCountry(e.target.value)}>
                        <option value="AED">United Arab Emirates</option>
                        <option value="INR">India</option>
                        {/* <option value="PKR">Pakistan</option> */}
                    </select>
                </div><br></br>
                <div className="modal-btn" onClick={props.countrySelector}>Done</div>
            </div>
        </div>
    );
}

export default modal;