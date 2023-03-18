import React from "react";
import Image from "next/legacy/image";
import weather_1 from "../public/assets/projects/weather_1.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const weather = () => {
  return (
    <div className="w-full">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src={weather_1}
        alt="/"
      />
      <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
        <h2 className="py-2">Weather App</h2>
        <h3>A weather app that utilizes the OpenWeather API</h3>
      </div>
    </div>
    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>Weather Dashboard is a user-friendly app that utilizes the OpenWeather API to provide users with accurate and up-to-date weather information for any city in the world. With a sleek and intuitive interface, users can easily input their desired location and receive a 5-day forecast that includes detailed information such as temperature, humidity, wind speed, and precipitation levels. The app also features a dynamic background that changes based on the current weather conditions of the selected location, providing a visually engaging experience for users. Weather Dashboard is a reliable and convenient tool for users looking to plan their activities or trips based on the weather forecast.</p>
         
          <a href='https://adamwagh512.github.io/weather-dashboard/' target='_blank'>
          <button className="px-8 py-2 mt-4 text-white bg-[#0093B9]" >Launch the APP</button>
          </a>

          <a href='https://github.com/adamwagh512/weather-dashboard' target='_blank'>
          <button className="px-8 py-2 mt-4 ml-8 text-white bg-[#0093B9]" >Visit the Repository</button>
          </a>

      </div>
      <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
              <p>Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Bulma</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> CSS</p>  
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> HTML</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> JavaScript</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Moment.JS</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Jquery</p>                              
              </div>
          </div>
      </div>
      <Link href='/#p_projects'>
          <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  </div>
  )
}

export default weather