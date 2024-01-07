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
    }, [weathermood]);

    let sec=sunset;
    let date= new Date(sec*1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`

    return (
    <div className='container'>
      <table className="table">
      <tbody>
        <thead>
      <tr>
          <th>
            <div className="description">
              {weathermood}, {name}, {country}
        
              {new Date().toLocaleString()}, {timeStr} Sunset
            </div>
          </th>
        </tr>
        </thead>
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
    </div>
  )
}

export default Weathercard;
