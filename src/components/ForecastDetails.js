import React from "react";

function ForecastDetails({ forecast }) {
  return (
    <div className="forecast-details">
      <p>Humidity {forecast.humidity}</p>
      <p>Wind Speed {forecast.wind.speed}</p>
      <p>Wind Direction {forecast.wind.direction}</p>
      <p>Temp Min {forecast.temperature.min}</p>
      <p>Temp Max {forecast.temperature.max}</p>
    </div>
  );
}
export default ForecastDetails;
