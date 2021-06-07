import "./App.css";
import Navbar from "./components/desktopNav/navbar";
import ContentContainer from "./components/contentContainer/contentContainer";
import NavMenu from "./components/mobileNav/navMenu";
import Footer from "./components/footer/footer";
import { useState, useEffect } from "react";
import Modal from "./components/countryModal/modal";

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
    <div className="App">
      <Navbar clicked={changeStatus}></Navbar>
      <ContentContainer></ContentContainer>
      {navStatus.status ? <NavMenu clicked={changeStatus}></NavMenu> : null}
      <Footer></Footer>
      <select className="curreny-selector">
        <option value="pakistan">PKR</option>
        <option value="india">INR</option>
        <option value="uae">AED</option>
      </select>
      {
        modal.status ? <Modal countrySelector = {countrySelector}></Modal> : null
      }
    </div>
  );
}

export default App;
