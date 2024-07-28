import React from "react";

export default function WeatherData({ data }) {

    if(!data || !data.main) {
        return <div>No data available. Please enter a city name and search.</div>
    }

    const weather =  data.weather && data.weather[0];

    return (
        <div>
            <h2>{data.name}</h2>
            <p>Temperature: {weather.main.temp ? weather.main.temp: 'Not available' }</p>
            <p>Weather: {weather.main}</p>
            <p>Description: {weather.description}</p>
        </div>
    );  
}

