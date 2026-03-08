import React from "react";
import './../styles/App.css';

const WeatherDisplay = ({ weather }) => {

  const { temperature, conditions } = weather;

  const colorStyle = {
    color: temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      <p>
        Temperature: <span style={colorStyle}>{temperature}</span>
      </p>
      <p>
        Conditions: {conditions}
      </p>
    </div>
  );
};

export default WeatherDisplay;
