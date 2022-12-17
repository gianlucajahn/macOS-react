import React, { useContext } from "react";
import { store } from "../../App";
import "./DailyCon.scss";

// SVG Imports
import { ReactComponent as Ash } from "../../resources/images/svg/weather/Ash.svg";
import { ReactComponent as Clear } from "../../resources/images/svg/weather/Clear.svg";
import { ReactComponent as Clouds } from "../../resources/images/svg/weather/Clouds.svg";
import { ReactComponent as Drizzle } from "../../resources/images/svg/weather/Drizzle.svg";
import { ReactComponent as Dust } from "../../resources/images/svg/weather/Dust.svg";
import { ReactComponent as Fog } from "../../resources/images/svg/weather/Fog.svg";
import { ReactComponent as Haze } from "../../resources/images/svg/weather/Haze.svg";
import { ReactComponent as Mist } from "../../resources/images/svg/weather/Mist.svg";
import { ReactComponent as Rain } from "../../resources/images/svg/weather/Rain.svg";
import { ReactComponent as Sand } from "../../resources/images/svg/weather/Sand.svg";
import { ReactComponent as Smoke } from "../../resources/images/svg/weather/Smoke.svg";
import { ReactComponent as Snow } from "../../resources/images/svg/weather/Snow.svg";
import { ReactComponent as Squall } from "../../resources/images/svg/weather/Squall.svg";
import { ReactComponent as Thunderstorm } from "../../resources/images/svg/weather/Thunderstorm.svg";
import { ReactComponent as Tornado } from "../../resources/images/svg/weather/Tornado.svg";
import sortedIntervalType from "../../types/sortedInterval";

export interface DailyConProps {
  day: sortedIntervalType[];
}

export default function DailyCon(props: DailyConProps) {
  const [state, dispatch] = useContext(store);
  const { day } = props;

  // determine weather condition with highest occurence within
  // the day array
  const determineDailyConString = (day: sortedIntervalType[]) => {
    const conditions: string[] = [];
    day.map((interval: any, i: number) => {
      conditions.push(interval.weather);
    });

    conditions.sort();
    var max = 0,
      result,
      freq = 0;
    for (var i = 0; i < conditions.length; i++) {
      if (conditions[i] === conditions[i + 1]) {
        freq++;
      } else {
        freq = 0;
      }
      if (freq > max) {
        result = conditions[i];
        max = freq;
      }
    }

    // render corresponding SVG depending on the outcome
    if (result === undefined) {
      result = day[0].weather;
    }
    return result;
  };

  const determineDailyCon = (day: sortedIntervalType[]) => {
    const conditions: string[] = [];
    day.map((interval: sortedIntervalType, i: number) => {
      conditions.push(interval.weather);
    });

    conditions.sort();
    var max = 0,
      result,
      freq = 0;
    for (var i = 0; i < conditions.length; i++) {
      if (conditions[i] === conditions[i + 1]) {
        freq++;
      } else {
        freq = 0;
      }
      if (freq > max) {
        result = conditions[i];
        max = freq;
      }
    }

    // render corresponding SVG depending on the outcome
    if (result === undefined) {
      result = day[0].weather;
    }
    let outcome: string = result;
    switch (outcome) {
      case "Clear":
        return <Clear />;
      case "Clouds":
        return <Clouds />;
      case "Ash":
        return <Ash />;
      case "Drizzle":
        return <Drizzle />;
      case "Dust":
        return <Dust />;
      case "Fog":
        return <Fog />;
      case "Snow":
        return <Snow />;
      case "Haze":
        return <Haze />;
      case "Mist":
        return <Mist />;
      case "Rain":
        return <Rain />;
      case "Sand":
        return <Sand />;
      case "Smoke":
        return <Smoke />;
      case "Squall":
        return <Squall />;
      case "Thunderstorm":
        return <Thunderstorm />;
      case "Tornado":
        return <Tornado />;
    }
  };

  return (
    <div className="daily-con">
      {determineDailyCon(day)}
      <h3>{determineDailyConString(day)}</h3>
    </div>
  );
}
