import React, { Component } from "react";
import Divider from "../divider/divider";
import Splash from "../splash/splash";
import "./submit_review.css";
import Swal from 'sweetalert2'

class SubmitReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order_id: window.location.search
        .substring(1)
        .split("=")
        .slice(1)
        .toString(),
      review_txt: "",
      stars: 5,
      load_status: false,
    };
  }

  submit() {
    // console.log(this.state.order_id);
    // console.log(this.state.review_txt);
    // console.log(this.state.stars);

    if (
      this.state.order_id !== "" &&
      this.state.review_txt !== "" &&
      this.state.stars != null
    ) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: this.state.order_id,
          review_txt: this.state.review_txt,
          stars: this.state.stars,
        }),
      };
      this.setState({
        load_status: true,
      });
      fetch(
        "https://embellish.herokuapp.com/product/submit_review/",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          this.setState({
            load_status: false,
          });
          let message = result.msg;
          if (message === "success") {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: "Thanks for submitting your valuable review.",
            })
            
            window.location.href = "/";
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
          }
        })
        .catch((error) => {
          this.setState({
            load_status: false,
          });
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        });
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Information Required!',
        text: 'Enter All Information',
      })
    }
  }

  render() {
    if (this.state.load_status) {
      return <Splash />;
    } else {
      return (
        <div>
          <Divider title="Submit Review"></Divider>
          <form className="review_form">
            <label className="label_fields">Review:</label>
            <br></br> <br></br>
            <div style={{ width: "100%", textAlign: "center" }}>
              <textarea
                className="input_fields"
                placeholder="Write your review..."
                onChange={(e) => {
                  this.state.review_txt = e.target.value;
                }}
              >
                {this.state.review_txt}
              </textarea>
            </div>
            <br></br> <br></br>
            <div>
              <label className="label_fields">Star Rating:</label>
              <select
                className="select_stars"
                onChange={(e) => {
                  this.state.stars = parseInt(e.target.value);
                  this.setState({});
                }}
                name={this.state.stars + " stars"}
              >
                <option defaultValue="5">5 stars</option>
                <option defaultValue="4">4 stars</option>
                <option defaultValue="3">3 stars</option>
                <option defaultValue="2">2 stars</option>
                <option defaultValue="1">1 stars</option>
              </select>
            </div>
            <br></br> <br></br> <br></br>
            <div style={{ width: "100%", textAlign: "center" }}>
              <button
                type="button"
                className="submit_button"
                onClick={() => this.submit()}
              >
                Submit
              </button>
            </div>
          </form>
          <br></br>
        </div>
      );
    }
  }
}

export default SubmitReview;
