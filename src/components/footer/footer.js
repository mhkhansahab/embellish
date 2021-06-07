import "./footer.css";
import "./../../styles/media-queries/responsive-footer.css";

const footer = () => {
  return (
    <div>
      <div className="footer-container flex center-2">
        <div className="footer-item">
          <div className="footer-text">BE THE FIRST TO KNOW</div>
          <div className="subscribe-text">Subscribe Now!</div>
          <div className="footer-text">
            Become a part of the Embellish family!
          </div>
        </div>
        <div className="footer-item">
          Get all the latest information on sales, discounts and weekly product
          launches. Sign up for our newsletter today.
        </div>
        <div className="inp-btn-container flex footer-item center-1">
          <input placeholder="Enter Your Email"></input>
          <span className="join-btn">JOIN</span>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="icon-container">
          <i className="fab fa-instagram icon"></i>
          <i className="fab fa-twitter icon"></i>
          <i className="fab fa-facebook-f icon"></i>
        </div>
      </div>
    </div>
  );
};

export default footer;
