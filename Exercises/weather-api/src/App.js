import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import partlyCloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";

import Search from "./Search/Search";
import CurrentWeather from "./WeatherNow/WeatherNow";
import DetailedWeather from "./DetailedWeather/DetailedWeather";

import React, { Component } from "react";
import "./App.css";
function getImg(id) {
  let val = "";
  if (id < 300) val = storm;
  else if (id >= 300 && id < 500) val = drizzle;
  else if (id >= 500 && id < 599) val = rain;
  else if (id >= 600 && id < 699) val = snow;
  else if (id >= 700 && id < 799) val = fog;
  else if (id === 800) val = clear;
  else if (id === 801) val = partlyCloudy;
  else if (id === 802) val = cloudy;
  else if (id > 801 && id < 806) val = mostlyCloudy;
  return val;
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: ""
    };
  }
  onSubmit = async txt => {
    console.log(txt);
    this.setState({
      cityName: txt
    });

    // async componentDidMount() {

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${txt}&cnt=8&units=metric&appid=3fd56fd89a7f9fc9a0182277400753fb`
    );
    const json = await response.json();
    console.log(json);

    this.setState({
      status: json.list[6].weather[0].description,
      name: json.list[0].weather[0].main,
      img: json.list[0].weather[0].main,
      tem: json.list[0].main.temp,
      Humidity: json.list[0].main.humidity,
      pressure: json.list[0].main.pressure,
      time1: json.list[6].main.temp,
      time2: json.list[0].main.temp,
      time3: json.list[1].main.temp,
      time4: json.list[2].main.temp,
      time5: json.list[3].main.temp,
      time6: json.list[4].main.temp,
      time7: json.list[5].main.temp,
      src: json.list[0].weather[0].id,
      src1: json.list[1].weather[0].id,
      src2: json.list[2].weather[0].id,
      src3: json.list[3].weather[0].id,
      src4: json.list[4].weather[0].id,
      src5: json.list[5].weather[0].id,
      src6: json.list[6].weather[0].id,
      src7: json.list[7].weather[0].id
    });
  };

  render() {
    return (
      <div className="app">
        <Search onSubmit={this.onSubmit}> > </Search>

        <main className="app__main">
          <CurrentWeather
            src={getImg(this.state.src)}
            status={this.state.status}
            temp={this.state.tem}
            humidity={this.state.Humidity}
            pressure={this.state.pressure}
          />
          <section className="details">
            <DetailedWeather
              src={getImg(this.state.src1)}
              time="03:00"
              temp={this.state.time1}
            />

            <DetailedWeather
              src={getImg(this.state.src2)}
              time="06:00"
              temp={this.state.time2}
            />

            <DetailedWeather
              src={getImg(this.state.src3)}
              time="09:00"
              temp={this.state.time3}
            />

            <DetailedWeather
              src={getImg(this.state.src4)}
              time="12:00"
              temp={this.state.time4}
            />

            <DetailedWeather
              src={getImg(this.state.src5)}
              time="15:00"
              temp={this.state.time5}
            />

            <DetailedWeather
              src={getImg(this.state.src6)}
              time="18:00"
              temp={this.state.time6}
            />

            <DetailedWeather
              src={getImg(this.state.src7)}
              time="21:00"
              temp={this.state.time7}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
