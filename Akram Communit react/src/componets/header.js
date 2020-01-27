import React from "react";

export default function Navheader(props) {
  return (
    <ul>
      <img className="logo responsive" src={require("../img/logo.png")} />
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#portfolio">Gallery</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li className="so">
        <a href="#" className="fab fa-facebook" />
        <a href="#" className="fab fa-linkedin" />
        <a href="#" className="fab fa-instagram" />
        <a href="#" className="fab fa-whatsapp" />
      </li>
    </ul>
  );
}
