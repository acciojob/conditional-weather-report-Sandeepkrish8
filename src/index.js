import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {

  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  return <WeatherDisplay weather={weather} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
