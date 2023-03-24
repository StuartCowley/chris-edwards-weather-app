import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

function App({ location }) {
  const { city, country } = location;
  // const { date, temperature, description } = forecasts;
  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
      {/* <ForecastSummary
        date={date}
        temperature={temperature}
        description={description}
      /> */}
    </div>
  );
}

export default App;
