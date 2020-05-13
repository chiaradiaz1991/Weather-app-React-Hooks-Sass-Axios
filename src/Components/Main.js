
import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Context from '../context';
import Content from './Content';
import Search from './Search';
import WeatherData from './WeatherData';
import Error from './Error';
import TagLine from './TagLine';
import Footer from './Footer';


const imageHome = require('../assets/weather.png');
const API_KEY = '15e36a872f73cf4347b76173a9d73808';


const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();

  const apiCall = async (e) => {
    e.preventDefault()
    const location = e.target.elements.location.value;

    if (!location) {
      setError("Please enter the name of the City :).")
      setWeather(null)
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    const request = axios.get(url);
    const response = await request;

    setWeather(response.data.main);
    setCity(response.data.name);
    setError(null);

  }

  return (
    <div className="main">
      <section className="sectionOne">
        <img src={imageHome} alt="image" />
      </section>
      <section className="sectionTwo">
        <Header />
        <Content>
          <TagLine />
          <Context.Provider
            value={{
              apiCall,
              weather,
              city,
            }}
          >
            <Search />
            {weather && (
              <WeatherData />
            )}
            {error && (
              <Error error={error} />
            )}

          </Context.Provider>
          <Footer />
        </Content>
      </section>
    </div>
  )
}

export default Main;