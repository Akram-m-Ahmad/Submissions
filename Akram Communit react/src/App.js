import React from "react";
import Gallery from "react-grid-gallery";

import "./App.css";
import Navheader from "./componets/header";
import Nhome from "./componets/home";
import Ngallery from "./componets/gallery";
import Ncontact from "./componets/contact";
import gallery from "./componets/gallery";
//import './script'
// import Nmap from './componets/map'

function App() {
  return (
    <>
      {/* <div className="loader-wrapper">
                <div className="loader" />
                <br />
                <h1>By Akram &amp; codi</h1>
            </div> */}
      <div className="container-fluid all">
        <div className="row   ">
          <div className="col-sm-3 left">
            <Navheader />
          </div>
          <div className="col-sm-9 right ">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 home" id="home">
                  <Nhome />
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-12 port" id="portfolio">
                  <Ngallery />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 contact about" id="contact">
                  <Ncontact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
