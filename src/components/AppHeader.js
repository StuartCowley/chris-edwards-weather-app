import React from "react";
import "../styles/AppHeader.css";

function AppHeader({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);
  return (
    <header className="AppHeader">
      <div>
        <h1>ClearDAY WEATHER</h1>
      </div>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Enter City"
          onChange={handleInputChange}
          value={searchText}
        />
        <button className="searchBar" type="submit" onClick={onSubmit}>
          Search
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
