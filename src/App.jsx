import { useState } from 'react'
import './App.css'

function App() {

  const api = {
    key: "a1ca0b5b2de6fabb8700403134dc2525",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [city, setCity] = useState("");

  const getData = () => {
    fetch(`${api.base}weather?q=${city}$units=metric&APPID=${api.key}`)
    .then((res)=> res.json())
    .then((result) => {
      console.log(result);
    });
  }
 

  return (
    <>
      <div>
        <input type="text" placeholder="City name" />
        <button onClick={getData}>Search</button>
      </div>
    </>
  )
}

export default App
