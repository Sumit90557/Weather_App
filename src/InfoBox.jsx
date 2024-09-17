import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {

  const COLD_URL = "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=612x612&w=0&k=20&c=jOZH4RSlX29thO6GNlvTUlYKUo_DK4xVxvXUTK7Jw5s=";
  const HOT_URL = "https://media.istockphoto.com/id/540761642/photo/thermometer-sun-40-degres-hot-summer-day-high-summer-temperatures.jpg?s=612x612&w=0&k=20&c=GsrBmxTsIPo5iECKnDcrCDHLPfsQjp24v28-gdPsjgs=";
  const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 20 ? <WbSunnyIcon /> : <AcUnitIcon />}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Adding PropTypes validation
InfoBox.propTypes = {
  info: PropTypes.shape({
    city: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    tempMin: PropTypes.number.isRequired,
    tempMax: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
    feelsLike: PropTypes.number.isRequired,
  }).isRequired,
};
