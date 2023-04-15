import React from "react";

function LocationDetails(props) {
  const { city, country } = props;
  const formattedCity = city ? city.toUpperCase() : "";
  const formattedCountry = country ? country.toUpperCase() : "";

  return (
    <h2>
      {formattedCity}
      {formattedCity && formattedCountry && ","} {formattedCountry}
    </h2>
  );
}

export default LocationDetails;
