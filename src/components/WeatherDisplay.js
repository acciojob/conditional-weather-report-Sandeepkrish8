import React, { useEffect } from "react";

function WeatherDisplay({weather}) {

  const{ temperature, conditions }=weather;

  const style={
    color:temperature >20 ? 'red' : 'blue'
  };

  useEfffect(()=>{
    console.log('Weather Loaded');
  }, []);

return (
  <div>
  <p>
  Tempearture: <span style={style}>{temperature}</span>
  </p>

<p>
  Conditions: { conditions }
  </p>
    </div>
);
}

export default WeatherDispaly;

