import React from "react";
import "./WeatherData.css";
// import { useState } from "react";

export default function WeatherData({ data }) {
  // const [image, setImage] = useState("");

  const checkNull = () => {
    if (!data || !data.main) {
      return (
        <div className="weather-data">
          No data available.
          <br /> Please enter a city name and search.
        </div>
      );
    }
    return null;
  };

  const weather = data && data.weather ? data.weather[0] : null;

  const image = weather
    ? ` https://openweathermap.org/img/wn/${weather.icon}@2x.png`
    : "";

  return (
    <>
      <div className="weather-data-container">
        <div className="weather-data-output">
          {checkNull()}
          {weather && (
            <>
              <img src={image} alt={weather.description} />
              <div className="weather-data">
                <h2>
                  {data.main.temp ? `${data.main.temp} °C` : "Not available"}
                </h2>
                <p className="place-name">
                  <b>{data.name}</b>
                </p>
                <div className="data-flex">
                  <p>
                    <b> Weather </b> <br /> {weather.main}
                  </p>
                  <p>
                    <b> Description </b> <br /> {weather.description}
                  </p>

                  <p>
                    <b>Humidity </b>
                    <br /> {data.main.humidity}%
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
