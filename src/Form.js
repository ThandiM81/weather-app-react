import React from "react";

import "./form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <div className="row">
          <div className="col-md-7 ">
            <input
              type="search"
              placeholder="Enter city...."
              class="form-control"
              id="city-entry"
              autocomplete="off"
              autofocus="on"
            />
          </div>
          <div className="col-md-4 p-1" id="find">
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
      </form>
    </div>
  );
}
