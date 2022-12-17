import React, { useContext } from "react";
import "./DailyTemps.scss";
import { ReactComponent as Highest } from "../../resources/images/svg/weather/highest.svg";
import { ReactComponent as Lowest } from "../../resources/images/svg/weather/lowest.svg";
import sortedIntervalType from "../../types/sortedInterval";

export interface DailyTempsProps {
  day: sortedIntervalType[];
}

export default function DailyTemps(props: DailyTempsProps) {
  const { day } = props;

  const determineTemps = () => {
    let lowestTemp: number = 100;
    let highestTemp: number = -100;
    day.forEach((interval: sortedIntervalType, i: number) => {
      if (interval.minTemp < lowestTemp) {
        lowestTemp = interval.minTemp;
      }

      if (interval.maxTemp > highestTemp) {
        highestTemp = interval.maxTemp;
      }
    });

    return [lowestTemp, highestTemp];
  };

  const temps = determineTemps();

  return (
    <div className="daily-temps">
      <div className="lowest">
        <Lowest className="lowest-icon icon" />
        <h3 className="lowest-h3">{temps[0]}°</h3>
      </div>
      <div className="highest">
        <Highest className="highest-icon icon" />
        <h3 className="highest-h3">{temps[1]}°</h3>
      </div>
    </div>
  );
}
