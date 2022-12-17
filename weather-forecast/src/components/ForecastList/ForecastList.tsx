import React, { useContext } from "react";
import { store } from "../../App";
import sortedIntervalType from "../../types/sortedInterval";
import DailyCon from "../DailyCon/DailyCon";
import DailyTemps from "../DailyTemps/DailyTemps";
import "./ForecastList.scss";

export default function ForecastList() {
  const [state, dispatch] = useContext(store);

  const selectDay = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    dispatch({
      type: 'select/SELECT',
      payload: target.id
    });
  }

  return (
    <div className="forecast-list">
      <div className="weekly">
        {state.weather.forecast !== 4
          ? state.weather.forecast.map(
              (dayArray: sortedIntervalType[], i: number) => {
                return (
                  <div className="day-container" id={`${i}`} onClick={selectDay}>
                    <h3 className="day">{dayArray[0].dateName}</h3>
                    <DailyCon day={dayArray} />
                    <DailyTemps day={dayArray} />
                  </div>
                );
              }
            )
          : null}
      </div>
    </div>
  );
}
