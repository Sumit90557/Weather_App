
import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css"; // Import external CSS

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 35.05,
    tempMax: 40.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="WeatherApp">
      <h2 className="app-title">Weather App by Sumit</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
