import React from "react";
import moment from "moment";
import iconData from "../data/iconData.json";

function ForecastSummary(props) {
  const { date, description, icon, temperature, onSelect, isSelected } = props;
  const weatherCode = icon;
  const formattedDate = moment.unix(date / 1000).format("dddd");

  return (
    <div
      className={`forecast-summary ${isSelected ? "selected" : ""}`}
      data-testid="forecast-summary"
    >
      <div className="forecast-summary__description">{description}</div>
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
      <div className="forecast-summary__date">{formattedDate}</div>
      {!isSelected && (
        <button type="button" onClick={onSelect}>
          More Details
        </button>
      )}
    </div>
  );
}

export default ForecastSummary;
