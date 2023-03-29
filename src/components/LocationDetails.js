import React from "react";

function LocationDetails(props) {
  const { city, country } = props;
  return (
    <h2>
      {city}
      {city && country && ","} {country}
    </h2>
  );
}

export default LocationDetails;
