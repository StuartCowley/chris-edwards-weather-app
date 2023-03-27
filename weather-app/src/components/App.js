import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  const { city, country } = location;
  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <div className="forecast">
        <ForecastSummaries forecasts={forecasts} />
        <ForecastDetails forecasts={forecasts} />
      </div>
    </div>
  );
}

export default App;
