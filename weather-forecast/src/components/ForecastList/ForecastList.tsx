import React, { useContext } from 'react';
import { store } from '../../App';
import sortedIntervalType from '../../types/sortedInterval';
import DailyCon from '../DailyCon/DailyCon';
import DailyTemps from '../DailyTemps/DailyTemps';
import './ForecastList.scss';

export default function ForecastList () {
  const [state, dispatch] = useContext(store)
  console.log(state.weather.forecast);

  return (
    <div className="forecast-list">
        <div className="weekly">
        {state.weather.forecast !== 4 ? state.weather.forecast.map((dayArray: sortedIntervalType[], i: number) => {
            return (
                <div className="day-container" id={`${i}`}>
                    <h3>{dayArray[0].dateName}</h3>
                    <DailyCon day={dayArray} />
                    <DailyTemps day={dayArray} />
                </div>
            )
        }) : null}
        </div>
    </div>
  );
}
