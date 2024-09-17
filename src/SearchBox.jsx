import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(""); // State to manage error message
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "0375965274e089a280e94ae952f0d601";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error("City not found");
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      console.log(result);
      setError(""); // Clear any previous error message
      return result;
    } catch (err) {
      console.error("Error fetching the weather data:", err);
      setError("City not found or something went wrong. Please try again.");
      return null;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    setCity(""); // Clear the input after submission
    let newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo); // Update if valid info is returned
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {error && <p className="error">{error}</p>} {/* Display the error if it exists */}
    </div>
  );
}

// Adding PropTypes validation
SearchBox.propTypes = {
  updateInfo: PropTypes.func.isRequired,
};
