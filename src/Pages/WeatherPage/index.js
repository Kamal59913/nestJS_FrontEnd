import { useEffect, useState } from "react";
import Weathercard from "./Weathercard";
import './app.css'

function WeatherPage() {
  const [searchValue,setSearchValue]= useState("sibsagar");
  const [tempInfo, setTempInfo] = useState({}); //empty  passsing initially
  const getWeatherInfo = async()=> {
      try{
          let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=75b31160e847eff782e127fda7c5665e`;
          const res= await fetch(url);
          const data= await res.json();

          const {temp,humidity,pressure} =data.main;
          console.log(temp);
          console.log(humidity);
          console.log(pressure);
          const {main:weathermood}=data.weather[0];
          const {name} =data;
          const {speed} =data.wind;
          const {country,sunset} =data.sys; 
          //object creating out of weather properties
          const myNewWeatherInfo ={
              temp, humidity, pressure, weathermood, name, speed, country, sunset
          };
          setTempInfo(myNewWeatherInfo);
      }catch(error){
          console.log(error);
      }
  };
  useEffect(() => {getWeatherInfo()}, []);
  return (
    <>
      <h6>By Kamal</h6>
      <h7> <b>Telegram's Link 👉🏼</b></h7>
      <a href="https://t.me/Weather_Kamal_bot">
      <img src="tele.png" className="teleImg"/>
      </a>
      <p> Click on the image Telgram Icon</p>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
            >
            Search
          </button>
        </div>
        </div>  
     <Weathercard tempinfo={tempInfo}/>
     </>
  )}
export default WeatherPage;
