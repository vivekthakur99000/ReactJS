import React, { useCallback, useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import clear from "..//images/clear.png";
import cloud from "..//images/clouds.png";
import drizzle from "..//images/drizzle.png";
import mist from "..//images/mist.png";
import rain from "..//images/rain.png";
import snow from "..//images/snow.png";

function Weather() {
  const [weatherData, setWeatherData] = useState(false);
  const inputRef = useRef();

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };

  async function getWeatherData(city) {
    if (city === "") {
      alert("Enter City name");
      return;
    }
   try {
    const apiId = "d00f3da445dc15db21e1c2f379e3b8ae";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiId}`
    );
    const data = await response.json();
    if(!response.ok) {
      alert(data.message)
      return
    }
    console.log(data);
    const icon = allIcons[data.weather[0].icon] || clear;
    setWeatherData({
      humidity: data.main.humidity,
      wind: data.wind.speed,
      temp: Math.round(data.main.temp),
      location: data.name,
      icon: icon,
    });
   } catch (error) {
    setWeatherData(false)
    console.eroor("Error in fetching weather data");
   }
  }

  useEffect(() => {
    getWeatherData("Bhopal");
  }, []);

  return (
    <div className=" w-[480px] h-[600px] bg-gradient-to-r from-violet-500 to-fuchsia-500  rounded-xl">
      <div className=" flex justify-between gap-5 items-center p-10 ">
        <input
          type="text"
          placeholder="Search..."
          className="h-10 w-full rounded-3xl pl-5 border-none outline-none"
          ref={inputRef}
        />
        <div
          className="search-box  bg-white h-10 flex items-center justify-center px-3 rounded-full cursor-pointer"
          onClick={() => {
            getWeatherData(inputRef.current.value);
            inputRef.current.value = ""; // Clear the input field
          }}
        >
          <FaSearch />
        </div>
      </div>
      {weatherData ? <>
        <div className=" flex flex-col justify-center items-center">
        <img src={weatherData.icon} alt="" className=" w-52" />
        <h1 className="tempreture text-6xl font-semibold text-white">
          {weatherData.temp}°c
        </h1>
        <h3 className="city-name text-6xl pt-4 text-white uppercase font-semibold">
          {weatherData.location}
        </h3>
      </div>
      <div className="flex justify-center items-center gap-40 mt-8">
        <div className="humidity flex justify-center items-center ">
          <WiHumidity className="text-white text-5xl gap-3" />
          <div className="">
            <h3 className="text-white">{weatherData.humidity}%</h3>
            <h3 className="text-white">Humidity</h3>
          </div>
        </div>
        <div className="wind flex justify-center items-center gap-3">
          <FaWind className="text-white text-5xl gap-3" />
          <div className="">
            <h3 className="text-white">{weatherData.wind}km/h</h3>
            <h3 className="text-white">Wind speed</h3>
          </div>
        </div>
      </div>
      </>:<></>}
     
    </div>
  );
}

export default Weather;
