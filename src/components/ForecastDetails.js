import React from "react";
import "../styles/ForecastDetails.css";
import {
  WaterOutline,
  SpeedometerOutline,
  CompassOutline,
  ThermometerOutline,
} from "react-ionicons";

function ForecastDetails({ forecast }) {
  return (
    <div className="forecast-details">
      <div className="forecast-detail">
        <div className="icon-container">
          <WaterOutline color="#fff" width="50px" height="50px" />
        </div>
        <p>Humidity: {forecast.humidity}%</p>
      </div>
      <div className="forecast-detail">
        <div className="icon-container">
          <SpeedometerOutline color="#fff" width="50px" height="50px" />
        </div>
        <p>Wind speed: {forecast.wind.speed}mph</p>
      </div>
      <div className="forecast-detail">
        <div className="icon-container">
          <CompassOutline color="#fff" width="50px" height="50px" />
        </div>
        <p>Wind direction: {forecast.wind.direction}</p>
      </div>
      <div className="forecast-detail">
        <div className="icon-container">
          <ThermometerOutline color="#fff" width="50px" height="50px" />
        </div>
        <p>
          Temp min/max: {forecast.temperature.min}°C /{" "}
          {forecast.temperature.max}
          °C
        </p>
      </div>
    </div>
  );
}

export default ForecastDetails;
