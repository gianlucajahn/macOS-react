import React, { useEffect, useState } from 'react';
import apiKey from "./utils/keys/key";
import './App.css';

function App() {
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
    // check if client browser supports geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getUserLocation, () => { throw new Error("A error occured while trying to get the user's current position!") });
    } else {
      // alert user that geolocation isn't working, defaulting to standard location
      alert("It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.")
    }
  }, []);

  return (
    <div className="App">
      <input type="text" onChange={(e) => setQuery(e.currentTarget.value)} placeholder="Your City" />
      <button type="button" onClick={getCityData}>Submit</button>
    </div>
  );
}

export default App;
