import React, { useState } from "react";

import "./today.css";

export default function Conversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit(event) {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="currentTemp" id="tempDisplay">
          {Math.round(props.celsius)}
        </span>
        <span className="units">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F{" "}
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="currentTemp" id="tempDisplay">
          {Math.round(fahrenheit())}
        </span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F{" "}
        </span>
      </span>
    );
  }
}
