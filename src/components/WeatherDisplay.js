import React, { useEffect } from "react";

const WeatherDisplay = ({ weather }) => {

  const { temperature, conditions } = weather;

  const colorStyle = {
    color: temperature > 20 ? "red" : "blue"
  };

  useEffect(() => {
    // just to demonstrate useEffect usage
    console.log("Weather component loaded");
  }, []);

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
