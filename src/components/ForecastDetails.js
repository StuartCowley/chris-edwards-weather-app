import React from "react";
import ForecastSummary from "./ForecastSummary";

function ForecastDetails({ forecasts = [] }) {
  return (
    <div className="forecast-details">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          temperatureMax={forecast.temperature.max}
          temperatureMin={forecast.temperature.min}
          humidity={forecast.humidity}
          windSpeed={forecast.wind.speed}
          windDirection={forecast.wind.direction}
        />
      ))}
    </div>
  );
}
export default ForecastDetails;
