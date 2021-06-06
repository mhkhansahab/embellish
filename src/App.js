import './App.css';
import Navbar from "./components/desktopNav/navbar";
import ContentContainer from "./components/contentContainer/contentContainer";
import NavMenu from "./components/mobileNav/navMenu";
import { useState } from "react";

function App() {

  const [navStatus, setnavStatus] = useState({status:false})

  const changeStatus=()=>{
    setnavStatus({
      status: !navStatus.status
    })
  }

  return (
    <div className="App">
      <Navbar clicked={changeStatus}></Navbar>
      <ContentContainer></ContentContainer>
      {navStatus.status ? 
      <NavMenu clicked={changeStatus}></NavMenu>
      :
      null}
    </div>
  );
}

export default App;
