import React from "react";

import "./form.css";

export default function Form() {
  return (
    <div className="Form">
      <div className="row">
        <div className=" col-8">
          <input
            type="search"
            placeholder="Enter city...."
            id="city-entry"
            className="form-control"
            autoComplete="off"
            autoFocus="on"
          />
        </div>
        <div className="col" id="find">
          <input
            type="submit"
            className="search-button"
            value="Search 🔍"
            id="search-city"
          />
          <input
            type="submit"
            className="location-button"
            value="Current 📍"
            id="location-search"
          />
        </div>
      </div>
    </div>
  );
}
