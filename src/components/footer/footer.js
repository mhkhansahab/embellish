import "./footer.css";
import "./../../styles/media-queries/responsive-footer.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewsletterSubscription } from "../../store/services/newsletter";
import Swal from "sweetalert2";

const Footer = () => {
  const [email, setEmail] = useState({
    email: "",
  });

  const dispatch = useDispatch();

  function validateEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

  const changeHandler = (e) => {
    setEmail({
      email: e.target.value,
    });
  };

  const submitNewsletter = async () => {
    if(email.email !== ""){
      if(validateEmail(email.email)){
        const result = await dispatch(setNewsletterSubscription(email.email));
        if(result.msg === "success"){
          Swal.fire({
            icon: 'success',
            title: "Congrats...",
            text: 'Congrats you have subscribed',
            iconColor: "#000",
            confirmButtonColor : "#000"
          })
          setEmail({email : ""})
        }else{
          Swal.fire({
            icon: 'error',
            title: "Oops...",
            text: "Oops you can't subscribed our services right now",
            iconColor: "#000",
            confirmButtonColor : "#000"
          })
        }
      }else{
        Swal.fire({
          icon: 'warning',
          title: "Invalid Email",
          text: 'Enter Correct Email',
          iconColor: "#000",
          confirmButtonColor : "#000"
        })
      }
    }else{
      Swal.fire({
        icon: 'info',
        title: "Invalid Email",
        text: "Enter Email",
        iconColor: "#000",
        confirmButtonColor : "#000"
      })
    }
  };

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
          <input
            placeholder="Enter Your Email"
            value = {email.email}
            onChange={(e) => changeHandler(e)}
          ></input>
          <span className="join-btn" onClick={()=>submitNewsletter()}>JOIN</span>
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

export default Footer;
