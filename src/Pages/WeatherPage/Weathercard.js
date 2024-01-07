import React, { useState,useEffect } from 'react'
import './app.css'

const Weathercard = ({tempinfo}) => { 
    const [weatherState, setWeatherState] = useState("");
    const {
        temp, humidity, pressure, weathermood, name, speed, country, sunset
    } = tempinfo;

    useEffect(() => {
        if(weathermood){
            switch(weathermood){
                case 'Clouds':setWeatherState('wi-day-cloudy');
                break;
                case 'Haze':setWeatherState('wi-fog');
                break;
                case 'Clear':setWeatherState('wi-day-sunny');
                break;
                case 'Mist':setWeatherState('wi-dust');
                break;
                default:
                setWeatherState('wi-day-sunny');
                break;

            }
        }
    }, [weathermood]);//only if the weathermood changes

    let sec=sunset;
    let date= new Date(sec*1000);//here we got the miliseconds which we can easily convert it into hourse time
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
    //converting sunset which is in seconds into hours
  return (
    <>
           <table className="weather-table">
      <tbody>
      <tr>
          <td colSpan="2">
            <div className="description">
              <div className="weatherCondition">{weathermood}</div>
              <div className="place">
                {name}, {country}
              </div>
              {new Date().toLocaleString()}, {timeStr} Sunset
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <i className={`wi ${weatherState}`}></i> Temperature
          </td>
          <td>
          <span>{temp}&deg;</span>
          </td>
        </tr>
        <tr>
          <td>Sunset</td>
          <td>{timeStr}</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{pressure}</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{humidity}</td>
        </tr>
        <tr>
        <td>Pressure</td>
        <td>{pressure}</td>

        </tr>
        <tr>
          <td>Wind Speed</td>
          <td>{speed}</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default Weathercard;
