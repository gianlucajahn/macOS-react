import { actionType } from "../types/action"
import { weatherType } from "../types/weather";
import { AnyAction } from "@reduxjs/toolkit";
import apiKey from "../utils/keys/key";

const weatherReducer = (state = {
  current: "",
  forecast: ""
}, action: AnyAction) => {
    switch(action.type) {
        case 'GEO':
            // declare base state to manipulate and return once done
            let weatherState = {
              current: null,
              forecast: null
            };
            navigator.geolocation.getCurrentPosition((position) => {
                // save user location in variables
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                // fetch current weather data and save it in currentData state 
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
                  .then(
                    function fulfilled(response) {
                      return response.json();
                    },
                    function rejected(err) {
                      throw new Error("Could not fetch data for your location! Please enter manually.")
                    }
                  ).then(
                    function fulfilled(response) {
                      weatherState = {
                        current: response,
                        forecast: weatherState.forecast
                      }
                    }
                  );

                // fetch 5 day forecast data for user location and save it in forecastData state
                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
                  .then(
                    function fulfilled(response) {
                      return response.json();
                    },
                    function rejected(err) {
                      throw new Error("Could not fetch forecast for your location! Please enter manually.")
                    }
                  ).then(
                    function fulfilled(response) {
                      weatherState = {
                        current: weatherState.current,
                        forecast: response
                      };
                      return weatherState;
                    }
                  )  
                return weatherState;
            }, () => { throw new Error("A error occured while trying to get the user's current position!") });
            return weatherState
        default:
          return state;
    }
}

export default weatherReducer;