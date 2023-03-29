import "../styles/App.css";
import React, { useState, useEffect } from "react";
import AppHeader from "./AppHeader";
import getForecast from "./getForecast";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App() {
  const [searchText, setSearchText] = useState("");
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  const handleCitySearch = () => {
    getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="weather-app">
      <AppHeader
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      <LocationDetails city={location.city} country={location.country} />
      <div className="forecast">
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
      </div>
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;
