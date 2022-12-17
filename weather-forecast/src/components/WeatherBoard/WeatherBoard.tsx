import React, { useContext, useEffect } from "react";
import { store } from "../../App";
import "./WeatherBoard.scss";
import positionWork from "../../utils/helpers/positionWork";
import SelectedWeatherSlice from "../SelectedWeatherSlice/SelectedWeatherSlice";
import SelectedDayForecast from "../SelectedDayForecast/SelectedDayForecast";
import ForecastList from "../ForecastList/ForecastList";
import { ReactComponent as Loading } from "../../resources/images/svg/loading.svg";

export default function WeatherBoard() {
  const [state, dispatch] = useContext(store);

  useEffect(() => {
    // use async logic with .then() before dispatching to keep the reducer pure and synchronous
    positionWork().then((weather) => {
      dispatch({
        type: "query/GEO",
        payload: weather,
      });
    });
  }, []);

  return (
    <div className="weather-board">
      {state.loading ?
        <Loading className="loading" /> :
        state.weather.current === undefined ? 
        <div>
          <h1 className="fail">City not found</h1>
          <h2 className="fail-text">Sorry, we couldn't find any weather data for the city you provided. <br />
          Please try another one.</h2>
        </div> :
        <>
          <div className="daily">
            <SelectedWeatherSlice />
            <SelectedDayForecast />
          </div>

          <ForecastList />
        </>
      }
    </div>
  );
}
