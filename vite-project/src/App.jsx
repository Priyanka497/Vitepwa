import { useState } from "react";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = () => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2f4d83b80748744cb35a910ee4d3411&units=metric`)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
      });

  };

  return (

    <div style={{textAlign:"center", padding:"40px"}}>

      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
      />

      <br/><br/>

      <button onClick={getWeather}>
        Search
      </button>

      {weather && weather.main && (

        <div style={{marginTop:"20px"}}>

          <h2>{weather.name}</h2>

          <p>Temperature: {weather.main.temp} °C</p>

          <p>Weather: {weather.weather[0].description}</p>

        </div>

      )}

    </div>

  );

}

export default App;