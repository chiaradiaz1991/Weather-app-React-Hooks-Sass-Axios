
import React, { useContext } from 'react';
import Context from '../context';

const WeatherData = () => {
  const { weather, city } = useContext(Context);
  const { temp, humidity, pressure } = weather;

  return (
    <div>
      <div className="weatherData">
        <p className="weatherTagline">Weather in <span className="weatherDataCity">{city}</span></p>
        <div className="weatherDataBox">
          <span className="weatherDataProperty">
            <p className="weatherDataTitle">Temperature</p>
            <p className="weatherDataValue">{temp}</p>
          </span>
          <span className="weatherDataProperty">
            <p className="weatherDataTitle">Humidity</p>
            <p className="weatherDataValue">{humidity}</p>
          </span>
          <span className="weatherDataProperty">
            <p className="weatherDataTitle">Pressure</p>
            <p className="weatherDataValue">{pressure}</p>
          </span>
        </div>
      </div>

    </div>
  )
}

export default WeatherData;