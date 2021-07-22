import "./App.css";
import Navbar from "./components/desktopNav/navbar";
import ContentContainer from "./components/contentContainer/contentContainer";
import NavMenu from "./components/mobileNav/navMenu";
import Footer from "./components/footer/footer";
import { useState, useEffect } from "react";
import Modal from "./components/countryModal/modal";
import ProductPage from "./components/productPage/productPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "./components/cartPage/cartPage";
import ProductListPage from "./container/productListPage/productList";
import { getAllProducts, getLatestArrivals } from "./store/services/products";
import { useDispatch } from "react-redux";
import { getAllCategories } from "./store/services/category";
import { getAllBanners } from "./store/services/banner";

function App() {
  const [navStatus, setnavStatus] = useState({ status: false });
  const [country, setcountry] = useState("AED");
  const [modal, setmodal] = useState({ status: false });
  const dispatch = useDispatch();
  const cntry = window.localStorage.getItem("country");

  useEffect(() => {
    if (!cntry) {
      setmodal({ status: true });
    }

    dispatch(getAllProducts());
    dispatch(getLatestArrivals());
    dispatch(getAllCategories());
    dispatch(getAllBanners());
  }, []);

  const changeStatus = () => {
    setnavStatus({
      status: !navStatus.status,
    });
  };

  const countrySelector = () => {
    window.localStorage.setItem("country", country);
    setmodal({ status: false });
  };

  const countryChanger = (e)=>{
    window.localStorage.setItem("country", e.target.value);
    setcountry(e.target.value);
  }
  return (
    <Router>
      <div className="App">
        <Navbar clicked={changeStatus}></Navbar>
        {navStatus.status ? <NavMenu clicked={changeStatus}></NavMenu> : null}

        <Switch>
          <Route path="/productlist">
            <ProductListPage></ProductListPage>
          </Route>
          <Route path="/product">
            <ProductPage></ProductPage>
          </Route>
          <Route path="/cart">
            <CartPage></CartPage>
          </Route>
          <Route path="/">
            <ContentContainer></ContentContainer>
          </Route>
        </Switch>

        <Footer></Footer>
        <select
          className="curreny-selector"
          value={cntry}
          onChange={(e) => countryChanger(e)}
        >
          <option value="AED">UAE</option>
          <option value="IND">IND</option>
          <option value="PKR">PAK</option>
        </select>

        {modal.status ? (
          <Modal
            countrySelector={countrySelector}
            setCountry={setcountry}
            Country={country}
          ></Modal>
        ) : null}
      </div>
    </Router>
  );
}

export default App;
