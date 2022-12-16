import React, { useContext, useEffect } from 'react';
import { store } from '../../App';
import './WeatherBoard.scss';
import positionWork from '../../utils/helpers/positionWork';
import SelectedWeatherSlice from '../SelectedWeatherSlice/SelectedWeatherSlice';
import SelectedDayForecast from '../SelectedDayForecast/SelectedDayForecast';
import ForecastList from '../ForecastList/ForecastList';

export default function WeatherBoard () {
  const [state, dispatch] = useContext(store)

  useEffect(() => {
    // use async logic with .then() before dispatching to keep the reducer pure and synchronous
    positionWork().then((weather) => {
        dispatch({
            type: 'query/GEO',
            payload: weather
        });
    });
  }, [])

  return (
    <div className="weather-board">
      <div className="daily">
        <SelectedWeatherSlice />
        <SelectedDayForecast />
      </div>

      <ForecastList />
    </div>
  );
}
