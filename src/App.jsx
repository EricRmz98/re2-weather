import { useState } from 'react';
import './App.css';
import useGetBackground from './hooks/useGetBackground';
import useGetWeather from './hooks/useGetWeather';

function App() {

  const [isCelcius, setIsCelcius] = useState(true);

  const { weather } = useGetWeather();
  const {background} = useGetBackground(weather.weather?.[0].icon);

  return (
    <div className='container' style={{backgroundImage: "url(" + background + ")"}}>
      <div className='card'>
        <div className='header'>
          <h1 className='weightless-txt marginless'>Weather Now In</h1>
          <h2 className='color-txt weightless-txt marginless'>
            {`${weather.name}, ${weather.sys?.country}`}
          </h2>
        </div>
        <div className='row'>
          <div className='temp-container col'>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@4x.png`}
              alt="" />
            <h3 className='weightless-txt marginless temp-txt'>
              <i className="fa-solid fa-temperature-half"></i>
              {isCelcius ?
                ` ${(weather.main?.temp - 273.15).toFixed(2)} °C` :
                ` ${((weather.main?.temp - 273.15) * 9 / 5 + 32).toFixed(2)} °F`}
            </h3>
            <button onClick={() => setIsCelcius(!isCelcius)}>{isCelcius ?
              'Change to Farenheit' :
              'Change to Celcius'}
            </button>
          </div>
          <div className='info-container col'>
            <div className='weather-info'>
              <h2 className='color-txt weightless-txt weather-title'>"{weather.weather?.[0].description}"</h2>
              <h3 className='weightless-txt'>
                <i className="fa-solid fa-wind"></i>
                <span> Wind speed:</span> {weather.wind?.speed}m/s
              </h3>
              <h3 className='weightless-txt'>
                <i className="fa-solid fa-cloud"></i>
                <span> Clouds:</span> {weather.clouds?.all}%
              </h3>
              <h3 className='weightless-txt'>
                <i className="fa-solid fa-gauge"></i>
                <span> Pressure:</span> {weather.main?.pressure}hPa
              </h3>
              <h3 className='weightless-txt'>
                <i className="fa-solid fa-droplet"></i>
                <span> Humidity:</span> {weather.main?.humidity}%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App
