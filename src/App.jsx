import { useState } from 'react';
import './App.css';
import WeatherData from './components/WeatherData';

function App() {

  const api = {
    key: "a1ca0b5b2de6fabb8700403134dc2525",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  const getData = () => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then((res)=> res.json())
    .then((result) => {
      setData(result);
    });
  }
 

  return (
    <>
      <div className='app'>
        <input type="text" placeholder="City name" value={city} onChange={(e) => setCity(e.target.value)}/>
        <button onClick={getData}>Search</button>
      </div>
      <WeatherData data={data} />
    </>
  );
}

export default App
