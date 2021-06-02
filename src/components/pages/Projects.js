import React from "react";
import cornstocks from "../../assets/images/cornstocks.JPG";
import weatherbee from "../../assets/images/weatherbee.JPG";
import FoodChain from "../..assets/images/HomepageScreenshot.PNG";

const Projects = () => (
  <div>
    <h1>Portfolio</h1>
    <div>
      <img src={weatherbee}></img>
      <a href="https://azun510.github.io/weatherBee/" target="_blank">
        WeatherBee Website
      </a>
      <a href="https://github.com/azun510/weatherBee" target="_blank">
        WeatherBee GitHub
      </a>
    </div>
    <div>
      <img src={cornstocks}></img>
      <a href="https://cornstocks-10-team.herokuapp.com/" target="_blank">
        Cornstocks Website
      </a>
      <a href="https://github.com/azun510/Cornstocks" target="_blank">
        Cornstocks GitHub
      </a>
    </div>
    <div>
      <img src={FoodChain}></img>
      <a href="https://thawing-thicket-29021.herokuapp.com/" target="_blank">
        FoodChain Website
      </a>
      <a href="https://github.com/azun510/theFoodChain" target="_blank">
        FoodChain GitHub
      </a>
    </div>
  </div>
);

export default Projects;
