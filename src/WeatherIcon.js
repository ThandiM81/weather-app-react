import React from "react";
import { ReactSkycon, SkyconType } from "react-skycons-extended";

import "./today.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "10d": "RAIN",
    "10n": "RAIN",
    "09d": "SHOWERS_DAY",
    "09n": "SHOWERS_NIGHT",
    "13d": "SNOW",
    "13d": "SNOW_SHOWERS_DAY",
    "13n": "SNOW_SHOWERS_NIGHT",
    "50d": "FOG",
    "50n": "FOG",
    "11d": "THUNDER",
    "11d": "THUNDER_RAIN",
    "11d": "THUNDER_SHOWERS_DAY",
    "11n": "THUNDER_SHOWERS_NIGHT",
  };

  return (
    <ReactSkycon
      icon={codeMapping[props.code]}
      color="black"
      size={80}
      animate={true}
    />
  );
}