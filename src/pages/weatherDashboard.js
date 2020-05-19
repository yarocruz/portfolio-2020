import React from "react"
import { Link } from "gatsby"

import weatherPic from "../images/weather-dashboard-screenshot.png";

import "../assets/tailwind.css"

const WeatherDashboardPage = () => (
    <div className="container text-gray-900 mx-auto mx-10 my-10">
        <div className="page p-5">
            <div className="flex items-center mb-5">
                <h1 className="secondary-heading pr-5">Weather Dashboard</h1>
                <div className="flex">
                    <a href="https://github.com/yarocruz/weather-dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15.66" viewBox="0 0 15 14.66">
                            <path className="icon" id="Path_1" data-name="Path 1" d="M143.812,107.408a7.5,7.5,0,0,0-2.371,14.62c.373.069.511-.166.511-.364v-1.276c-2.086.46-2.528-1-2.528-1a2.008,2.008,0,0,0-.833-1.1c-.677-.46.055-.46.055-.46a1.579,1.579,0,0,1,1.147.774,1.6,1.6,0,0,0,2.183.626,1.593,1.593,0,0,1,.46-1c-1.667-.189-3.417-.833-3.417-3.707a2.9,2.9,0,0,1,.769-2.012,2.731,2.731,0,0,1,.074-1.985s.631-.2,2.063.769a7.1,7.1,0,0,1,3.758,0c1.432-.972,2.058-.769,2.058-.769a2.717,2.717,0,0,1,.078,1.985,2.9,2.9,0,0,1,.769,2.012c0,2.883-1.754,3.513-3.426,3.684a1.773,1.773,0,0,1,.511,1.381c0,1,0,1.814,0,2.058s.134.433.516.364a7.506,7.506,0,0,0-2.376-14.62Z" transform="translate(-136.302 -107.38)" fill="#2b3139" fillRule="evenodd" />
                        </svg>
                    </a>
                    <a href="https://yarocruz.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" className="ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <path className="icon" id="icon-external-link" d="M15.444,5.652,7.433,13.663a.778.778,0,1,1-1.089-1.1l8-8H11.556a.778.778,0,0,1,0-1.556h4.667A.778.778,0,0,1,17,3.778V8.444a.778.778,0,1,1-1.556,0Zm-1.556,5.9a.778.778,0,0,1,1.556,0v3.889A1.556,1.556,0,0,1,13.889,17H4.556A1.556,1.556,0,0,1,3,15.444V6.111A1.56,1.56,0,0,1,4.556,4.556H8.444a.778.778,0,1,1,0,1.556H4.556v9.333h9.333Z" transform="translate(-3 -3)" fill="#2b3139" />
                        </svg>
                    </a>
                </div>
            </div>

            <img className="lg:max-w-3xl max-w-full mb-5 shadow" src={weatherPic} alt="screenshot of weather dashboard applications" />

            <p className="max-w-3xl my-5">This is a web application that uses OpenWeatherMap's API. When the user types in a city name, he can hit enter or click the input search button and see the city's current weather. It specifically grabs the temperature,
            humidity, wind speed, and UV index. It also gives you a 5 day forecasts. It also saves the last five city searches.</p>

            <h1 className="secondary-heading pr-5">Technologies</h1>

            <p className="max-w-3xl my-5">This project was built with jQuery and Bootsrap, but bulk of it consists of api calls to OpenWeatherMap.
            jQuery's .ajax() method makes it a breeze to make requests.</p>

            <h1 className="secondary-heading pr-5">Problems and Solutions</h1>

            <p className="max-w-3xl my-5">Getting the five day forecast was the most difficult part of this project. First, you have to make a separate call and what you get from it is 40 objects with future weather data in 3 hour increments.
            I knew I had to do a conditional loop, but I had no idea at first how I was going to make sure it selected 5 different days. The line that does the magic is below:</p>

            <p className="max-w-3xl my-5 pb-5">
                <code className="bg-gray-100 text-gray-600 p-3">
                    if (res.list[i].dt_txt.indexOf("15:00:00") !== -1)
                </code>
            </p>

            <Link to="/" className="shadow bg-gray-100 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-gray-600 hover:text-gray-800 text-sm py-2 px-4 mr-5 rounded">{`${String.fromCharCode(8592)} Back to Main Page`}</Link>
            <Link to="/codeQuiz" className="shadow bg-gray-100 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-gray-600 hover:text-gray-800 text-sm py-2 px-4 rounded">{`See Next Project ${String.fromCharCode(8594)}`}</Link>
        </div>
    </div>
)

export default WeatherDashboardPage