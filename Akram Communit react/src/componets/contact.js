import React from "react";

export default function gallery(props) {
  return (
    <div>
      <h1 className="abouth h1">CONTACT</h1>
      <br />
      <div className="container-fluid">
        <div className="row ">
          <div className="col-sm-6 ">
            <br />
            <br />
            <div className="loc ">
              <i
                style={{ marginTop: "4px", marginLeft: "0px" }}
                className="fas fas fa-map-marked-alt"
              />
              <h5 style={{ fontWeight: "bold" }}>Location:</h5>
              <h5 className="txt"> Road AL-Cham, Aley, Lebanon</h5>
            </div>
            <div className="cal ">
              <i style={{ marginTop: "4px" }} className=" fas fa-phone-alt" />
              <h5 style={{ fontWeight: "bold" }}>Phone:</h5>
              <h5 className="txt">+961 79 31 85 83</h5>
            </div>
            <div className="cal">
              <i style={{ marginTop: "4px" }} className=" fas  fa-link" />
              <h5 style={{ fontWeight: "bold" }}>Website:</h5>
              <h5 className="txt">www.akram.com</h5>
            </div>
            <div className="cal">
              <i style={{ marginTop: "4px" }} className="fab fa-facebook" />
              <h5 style={{ fontWeight: "bold" }}>Facebook:</h5>
              <h5 className="txt">@akram ahmad</h5>
            </div>
            <div className="cal">
              <i style={{ marginTop: "4px" }} className=" fab fa-linkedin" />
              <h5 style={{ fontWeight: "bold" }}>Linkedin:</h5>
              <h5 className="txt">@akram ahmad</h5>
            </div>
            <div className="cal">
              <i style={{ marginTop: "4px" }} className=" fas fa-phone-alt" />
              <h5 style={{ fontWeight: "bold" }}>Phone:</h5>
              <h5 className="txt">+961 79 31 85 83</h5>
            </div>
            <div className="cal">
              <i style={{ marginTop: "4px" }} className=" fab fa-instagram" />
              <h5 style={{ fontWeight: "bold" }}>Instagram:</h5>
              <h5 className="txt">@akram ahmad</h5>
            </div>
            <div className="cal">
              <i style={{ marginTop: "4px" }} className=" fab fa-whatsapp" />
              <h5 style={{ fontWeight: "bold" }}>Whatsapp:</h5>
              <h5 className="txt">+961 79 31 85 83</h5>
            </div>
            <div className="cal">
              <i style={{ marginTop: "4px" }} className=" fab fa-github" />
              <h5 style={{ fontWeight: "bold" }}>Github:</h5>
              <h5 className="txt">@akram-m-ahmad</h5>
            </div>
          </div>
          <div className="col-sm-6 ">
            <br />
            <br />
            <div id="map" />
          </div>
        </div>
      </div>
    </div>
  );
}
