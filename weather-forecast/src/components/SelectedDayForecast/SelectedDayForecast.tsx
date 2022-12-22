import React, { useContext } from "react";
import { store } from "../../App";
import "./SelectedDayForecast.scss";
// SVG Imports
import { ReactComponent as Ash } from "../../resources/images/svg/weather/Ash.svg";
import { ReactComponent as Clear } from "../../resources/images/svg/weather/Clear.svg";
import { ReactComponent as ClearNight } from "../../resources/images/svg/weather/Clear_night.svg";
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
import nightTimes from "../../utils/helpers/nightTimes";

export default function SelectedDayForecast() {
  const [state, dispatch] = useContext(store);

  const returnCurrentCon = (weather: string, i: number) => {
    switch (weather) {
      case "Clear":
        if (
          nightTimes.includes(
            state.selected
              ? state.selected[i].hours
              : state.weather.forecast[0][i].hours
          )
        ) {
          return <ClearNight />;
        }
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
    <div className="selected-day-forecast">
      <section className="intervals" id="intervals">
        {state.selected
          ? state.selected.map((interval: any, i: number) => {
              return (
                <div className="interval-container">
                  <h3 className="time">{interval.hours}</h3>

                  <div className="current-con">
                    {returnCurrentCon(interval.weather, i)}
                  </div>

                  <h3 className="temp">{interval.temp}°</h3>
                </div>
              );
            })
          : state.weather.forecast[0]
          ? state.weather.forecast[0].map((interval: any, i: number) => {
              return (
                <div className="interval-container">
                  <h3 className="time">{interval.hours}</h3>

                  <div className="current-con">
                    {returnCurrentCon(interval.weather, i)}
                  </div>

                  <h3 className="temp">{interval.temp}°</h3>
                </div>
              );
            })
          : null}
      </section>
    </div>
  );
}
