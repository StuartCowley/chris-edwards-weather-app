import React from "react";
import iconData from "../data/iconData.json";

function ForecastSummary(props) {
  const { date, description, icon, temperature, onSelect } = props;
  const weatherCode = icon;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <img
          className="forecast-summary__icon"
          src={iconData[weatherCode]}
          alt={`${icon}`}
        />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={onSelect}>
        More Details
      </button>
    </div>
  );
}

export default ForecastSummary;
