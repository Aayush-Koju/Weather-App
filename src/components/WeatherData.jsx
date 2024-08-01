import React from "react";
// import { useState } from "react";

export default function WeatherData({ data }) {
  // const [image, setImage] = useState("");

  if (!data || !data.main) {
    return <div>No data available. Please enter a city name and search.</div>;
  }

  const weather = data.weather && data.weather[0];

  const image = ` https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <>
      <img src={image} alt={weather.description} />
      <div className="weather-data">
        <h2>{data.name}</h2>
        <p>
          Temperature:{" "}
          {data.main.temp ? `${data.main.temp} °C` : "Not available"}
        </p>
        {weather && (
          <>
            <p>Weather: {weather.main}</p>
            <p>Description: {weather.description}</p>
            {/* <p>Description: {weather.icon}</p> */}
          </>
        )}
        <p>Humidity: {data.main.humidity}%</p>
      </div>
    </>
  );
}
