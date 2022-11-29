import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { geolocate } from './actions';
import apiKey from "./utils/keys/key";
import './App.scss';

function App() {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [currentData, setCurrentData] = useState();
  const [dailyData, setDailyData] = useState();
  const [forecastData, setForecastData] = useState();
  const [geolocation, setGeolocation] = useState(true);

  // get city data from input value
  const getCityData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`, {
      mode: 'cors'
    }).then(
      function fulfilled(response) {
        return response.json();
      },
      function rejected(err) {
        throw new Error("Could not fetch data for this city!");
      }
    ).then(
      function fulfilled(response) {
        setCurrentData(response);
        let location = [response.coord.lat.toString(), response.coord.lon.toString()];
        return location;
      }
    ).then(
      function fulfilled(location) {
        // fetch 5 day forecast data for selected city and save it in forecastData state
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location[0]}&lon=${location[1]}&appid=${apiKey}&units=metric`)
        .then(
          function fulfilled(response) {
            return response.json();
          },
          function rejected(err) {
            throw new Error("Could not fetch forecast for this city!")
          }
        ).then(
          function fulfilled(response) {
            setForecastData(response);
          }
        )
      }
    )
  }

  // get city data from geolocation
  const getUserLocation = (position: GeolocationPosition) => {
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
          setCurrentData(response);
        }
      )

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
          setForecastData(response);
        }
      )
  }

  useEffect(() => {
    dispatch(geolocate())
  }, []);

  return (
    <ChakraProvider>
        <div className="App">
            <input type="text" onChange={(e) => setQuery(e.currentTarget.value)} placeholder="Your City" />
            <button type="button" onClick={getCityData}>Submit</button>
        </div>
    </ChakraProvider>
  );
}

export default App;
