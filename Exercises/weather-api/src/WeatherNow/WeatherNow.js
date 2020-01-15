import React from "react";

const WeatherNow = props => {
  return (
    <section id="main-weather">
      <img src={props.src} />
      <p id="hero">{props.status}</p>
      <p>
        <strong>Temperature</strong> <span> {props.temp}</span>&#8451;
      </p>
      <div className="info">
        <p>
          <strong>Humidity</strong>
          <span> {props.humidity}%</span>
        </p>
        <p>
          <strong>Pressure</strong>
          <span> {props.pressure}</span>
        </p>
      </div>
    </section>
  );
};

export default WeatherNow;
