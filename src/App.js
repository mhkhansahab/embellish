import "./App.css";
import Navbar from "./components/desktopNav/navbar";
import ContentContainer from "./components/contentContainer/contentContainer";
import NavMenu from "./components/mobileNav/navMenu";
import Footer from "./components/footer/footer";
import { useState, useEffect } from "react";
import Modal from "./components/countryModal/modal";
import ProductPage from "./components/productPage/productPage";
import {BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Cart from "./components/cart/cart";
import CartPage from "./components/cartPage/cartPage";

function App() {
  const [navStatus, setnavStatus] = useState({ status: false });
  const [country, setcountry] = useState({country:null})
  const [modal, setmodal] = useState({status : false})
  
  useEffect(() => {
    const country = window.localStorage.getItem("country");
    if(!country){
      setmodal({status:true})
    }
  }, [])


  const changeStatus = () => {
    setnavStatus({
      status: !navStatus.status,
    });
  };

  const countrySelector = ()=>{
    setmodal({status : false})
  }

  return (
    <Router>
    <div className="App">
      <Navbar clicked={changeStatus}></Navbar>
      {navStatus.status ? <NavMenu clicked={changeStatus}></NavMenu> : null}
   
      {/* <CartPage></CartPage> */}
      <Switch>
      <Route path="/product"><ProductPage></ProductPage></Route>
      <Route path="/"><ContentContainer></ContentContainer></Route>
      </Switch>
      
      <Footer></Footer>
      {/* <select className="curreny-selector">
        <option value="pakistan">PKR</option>
        <option value="india">INR</option>
        <option value="uae">AED</option>
      </select> */}

    
    {/* <Cart></Cart> */}


      {/* {
        modal.status ? <Modal countrySelector = {countrySelector}></Modal> : null
      } */}

    </div>
    </Router>
  );
}

export default App;
