import React, { useContext, useEffect } from 'react';
import { store } from '../../App';
import './WeatherBoard.scss';
import positionWork from '../../utils/keys/helpers/positionWork';

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
        <h3>Data was last fetched for: {state.weather.current.name}</h3>
        <h3>Current query: {state.query}</h3>
    </div>
  );
}
