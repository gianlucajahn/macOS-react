import React, { useContext } from 'react';
import { store } from '../../App';

export default function ForecastList () {
  const [state, dispatch] = useContext(store)

  return (
    <div className="forecast-list">
        {state.weather.forecast.map((dayArray: any, i: number) => {
            return (
                <div className="day-container" id={`${i}`}>
                    
                </div>
            )
        })}
    </div>
  );
}
