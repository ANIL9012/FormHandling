import React, { useEffect, useState } from "react";
// import thunder from "./assets/thunder.png";
function App() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const currentDate = new Date();
  
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${day},${month}, ${year}`;

  const API_KEY = "f3ca1ceb67e861bb08a412500d025b5c";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
        `);

      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return "/thunder.png";
      case "Rain":
        return "rain_with_cloud.png";
      case "Mist":
        return "/Torando.png";
      case "Haze":
        return "/sun.png";
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <div className="container">
        {weatherData && (
          <>
            <h1 className="container_date">{formattedDate}</h1>
            <div className="weather_date">
              <h2 className="container_city">{weatherData.name}</h2>
              <img
                src={getWeatherIconUrl(weatherData.weather[0].main)}
                alt="thunder"
                className="container_img"
                width="180px"
              />
              <h2 className="container_degree">{weatherData.main.temp}</h2>
              <h2 className="country_per">
                {weatherData.weather[0].description}
              </h2>
              <h2 className="country_per">{weatherData.wind.deg}</h2>
              <h2 className="country_per">{weatherData.wind.speed}</h2>
              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter city name"
                  onChange={handleInputChange}
                />
                <button type="submit">Get</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
