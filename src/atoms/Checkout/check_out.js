import React, { Component } from "react";
import "./check_out.css";
import Divider from "../divider/divider";
import Splash from "../../atoms/splash/splash";

export default class check_out extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: "",
      email: "",
      address: "",
      phone: "",
      currency: "",
      total: "",
      payment_method: "cod",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      token: "",
      ccNo: "",
      expMonth: "1",
      expYear: "2021",
      cvv: "",
      load_status: false,
    };
  }

  componentDidMount() {
    const crncy = window.localStorage.getItem("country");
    const orders = JSON.parse(window.localStorage.getItem("order"));

    orders.forEach((order) => {
      let item = {
        product_id: order.id,
        qty: order.quantity,
        color: order.color,
        size: order.size,
        img: order.image,
        name: order.name,
        price_pp: order.price,
        price_pkr: order.price_pkr,
        price_uae: order.price_uae,
        price_ind: order.price_ind,
      };
      this.state.items.push(item);
    });

    console.log(orders);

    this.setState({
      ...this.state,
      currency: crncy,
    });
  }

  submit() {
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.address !== "" &&
      this.state.country !== "" &&
      this.state.city !== "" &&
      this.state.zipCode !== "" &&
      this.state.state !== "" &&
      this.state.payment_method !== "" &&
      this.state.phone !== ""
    ) {
      if (this.state.payment_method === "cod") {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: this.state.items,
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            phone: this.state.phone,
            currency: this.state.currency,
            country: this.state.country,
            payment_method: this.state.payment_method,
          }),
        };

        this.setState({
          load_status: true,
        });

        fetch(
          "https://embellish.herokuapp.com/product/place_order/",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            this.setState({
              load_status: false,
            });

            let message = result.Message;
            if (message !== "Error") {
              alert(
                "Order placed Successfully, you will receive a confirmation email soon."
              );
              window.location.href = "/";
            } else {
              alert("Some error occurred. Try again.");
            }
          })
          .catch((error) => {
            this.setState({
              load_status: false,
            });

            alert("Some error occurred. Try again.");
          });
      } else if (this.state.payment_method === "online") {
        if (
          this.state.ccNo !== null &&
          this.state.expMonth !== null &&
          this.state.expYear !== null &&
          this.state.cvv !== null
        ) {
          var args = {
            sellerId: "251276432452",
            publishableKey: "D6180F7A-0D8F-46C7-9149-67E3ED4081FB",
            ccNo: this.state.ccNo,
            cvv: this.state.cvv,
            expMonth: this.state.expMonth,
            expYear: this.state.expYear,
          };

          window.TCO.loadPubKey("production", function () {
            this.setState({
              load_status: true,
            });

            window.TCO.requestToken(successCallback, errorCallback, args);
          });

          var successCallback = (data) => {
            // console.log(data.response.token.token);

            this.setState({
              ...this.state,
              token: data.response.token.token,
            });

            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                items: this.state.items,
                name: this.state.name,
                email: this.state.email,
                address: this.state.address,
                phone: this.state.phone,
                currency: this.state.currency,
                payment_method: this.state.payment_method,
                token: data.response.token.token,
                city: this.state.city,
                state: this.state.state,
                zipCode: this.state.zipCode,
                country: this.state.country,
              }),
            };

            this.setState({
              load_status: true,
            });

            fetch(
              "https://embellish.herokuapp.com/product/place_order/",
              requestOptions
            )
              .then((response) => response.json())
              .then((result) => {
                this.setState({
                  load_status: false,
                });

                let message = result.Message;
                console.log(message);

                if (message !== "Error") {
                  alert(
                    "Order placed Successfully, you will receive a confirmation email soon."
                  );
                  window.location.href = "/";
                } else {
                  alert("Some error occurred. Try again.");
                }
              })
              .catch((error) => {
                this.setState({
                  load_status: false,
                });

                console.log(error.message);
                alert("Some error occurred. Try again.");
              });
          };

          var errorCallback = (data) => {
            this.setState({
              load_status: false,
            });

            alert("Some error occurred. Try again.");
          };
        } else {
          alert("Enter All Information");
        }
      }
    } else {
      alert("Enter All Information");
    }
  }

  render() {
    if (this.state.load_status) {
      return <Splash />;
    } else {
      if (this.state.payment_method === "cod") {
        return (
          <div>
            <Divider title="Check Out"></Divider>
            <form className="review_form_c" style={{ textAlign: "left" }}>
              <label className="label_fields_c">Full Name:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="Full Name..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    name: e.target.value,
                  });
                }}
                value={this.state.name}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Email:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="Email..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    email: e.target.value,
                  });
                }}
                value={this.state.email}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Phone:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="Number with country code..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    phone: e.target.value,
                  });
                }}
                value={this.state.phone}
                type="tel"
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Address:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="Address..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    address: e.target.value,
                  });
                }}
                value={this.state.address}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Country:</label>
              <br></br>
              <select
                className="select_stars_c"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    country: e.target.value,
                  });
                }}
                name={this.state.country}
              >
                <option defaultValue="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option defaultValue="India">India</option>
                {/* <option defaultValue="Pakistan">Pakistan</option> */}
              </select>{" "}
              <br /> <br />
              <label className="label_fields_c">City:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="City..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    city: e.target.value,
                  });
                }}
                value={this.state.city}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">State:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="State..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    state: e.target.value,
                  });
                }}
                value={this.state.state}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Zip Code:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="Zip Code..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    zipCode: e.target.value,
                  });
                }}
                value={this.state.zipCode}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Payment Method:</label>
              <br></br>
              <select
                className="select_stars_c"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    payment_method: e.target.value,
                  });
                }}
                name={this.state.payment_method}
              >
                <option value="cod">Cash on delivery</option>
                <option value="online">Online Payment</option>
              </select>{" "}
              <br /> <br />
              <br />
              <div style={{ width: "100%", textAlign: "center" }}>
                <button
                  type="button"
                  className="submit_button_c"
                  onClick={() => this.submit()}
                >
                  Submit
                </button>
              </div>
            </form>
            <br></br>
            <br></br>
          </div>
        );
      } else {
        return (
          <div>
            <Divider title="Check Out"></Divider>
            <form className="review_form_c" style={{ textAlign: "left" }}>
              <label className="label_fields_c">Full Name:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="Full Name..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    name: e.target.value,
                  });
                }}
                value={this.state.name}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Email:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="Email..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    email: e.target.value,
                  });
                }}
                value={this.state.email}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Phone:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="Number with country code..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    phone: e.target.value,
                  });
                }}
                value={this.state.phone}
                type="tel"
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Address:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="Address..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    address : e.target.value
                  })
                }}
                value={this.state.address}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Country:</label>
              <br></br>
              <select
                className="select_stars_c"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    country : e.target.value
                  })
                }}
                name={this.state.country}
              >
                <option defaultValue="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option defaultValue="India">India</option>
                {/* <option defaultValue="Pakistan">Pakistan</option> */}
              </select>{" "}
              <br /> <br />
              <label className="label_fields_c">City:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="City..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                  city : e.target.value
                  })
                }}
                value={this.state.city}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">State:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="State..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    state : e.target.value
                  })
                }}
                value={this.state.state}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Zip Code:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="Zip Code..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    zipCode : e.target.value
                  })
                }}
                value={this.state.zipCode}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Payment Method:</label>
              <br></br>
              <select
                className="select_stars_c"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    payment_method : e.target.value
                  })
                }}
                name={this.state.payment_method}
              >
                <option value="cod">Cash on delivery</option>
                <option value="online">Online Payment</option>
              </select>{" "}
              <br /> <br />
              <label className="label_fields_c">Card Number:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="Card Number..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    ccNo : e.target.value
                  })
                }}
                value={this.state.ccNo}
              ></input>
              <br></br> <br />
              <label className="label_fields_c">Card Expiry Month:</label>
              <br></br>
              <select
                className="select_stars_c"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    expMonth : e.target.value
                  })
                }}
                name={this.state.expMonth}
              >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>{" "}
              <br /> <br />
              <label className="label_fields_c">Card Expiry Year:</label>
              <br></br>
              <select
                className="select_stars_c"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    expYear : e.target.value
                  })
                }}
                name={this.state.expYear}
              >
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>{" "}
              <br /> <br />
              <label className="label_fields_c">Card Security Code:</label>
              <br></br>
              <input
                className="input_fields_c"
                placeholder="Card Security Code..."
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    cvv : e.target.value
                  })
                }}
                value={this.state.cvv}
              ></input>
              <br></br> <br />
              <br />
              <div style={{ width: "100%", textAlign: "center" }}>
                <button
                  type="button"
                  className="submit_button_c"
                  onClick={() => this.submit()}
                >
                  Submit
                </button>
              </div>
            </form>
            <br></br>
            <br></br>
          </div>
        );
      }
    }
  }
}
