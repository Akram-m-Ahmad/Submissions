import React from "react";
import "../App.css";
const DetailedWeather = props => {
  return (
    <div className="container extend">
      <div className="row ">
        <ul>
          <li className="hour">{props.time}</li>
          <li className="icon">
            <img src={props.src} />
          </li>
          <li className="temp">
            <span>{props.temp}</span>&#8451;
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailedWeather;
