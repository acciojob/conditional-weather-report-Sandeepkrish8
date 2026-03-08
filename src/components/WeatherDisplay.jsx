import React from "react";

function WeatherDisplay() {
  const weather = { temperature: 25, conditions: "Sunny" };

  let weatherClass = "";

  if (weather.temperature < 15) {
    weatherClass = "cold";
  } else if (weather.temperature <= 30) {
    weatherClass = "pleasant";
  } else {
    weatherClass = "hot";
  }

  return (
    <div className={weatherClass}>
      <h1>Temperature: {weather.temperature}°C</h1>
      <h2>Condition: {weather.conditions}</h2>
    </div>
  );
}

export default WeatherDisplay;
