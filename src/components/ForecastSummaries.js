import React from "react";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

function ForecastSummaries({ forecasts = [], onForecastSelect }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          icon={forecast.icon}
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          temperature={forecast.temperature}
          onSelect={() => onForecastSelect(forecast.date)}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;
