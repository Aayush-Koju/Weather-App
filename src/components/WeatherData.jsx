import React from "react";

export default function WeatherData({ data }) {
  if (!data || !data.main) {
    return <div>No data available. Please enter a city name and search.</div>;
  }

  const weather = data.weather && data.weather[0];

  return (
    <div className="weather-data">
      <h2>{data.name}</h2>
      <p>
        Temperature: {data.main.temp ? `${data.main.temp} °C` : "Not available"}
      </p>
      {weather && (
        <>
          <p>Weather: {weather.main}</p>
          <p>Description: {weather.description}</p>
        </>
      )}
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
}
