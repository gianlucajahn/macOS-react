import React, { useContext, useEffect } from "react";
import { store } from "../../App";
import "./WeatherBoard.scss";
import positionWork from "../../utils/helpers/positionWork";
import SelectedWeatherSlice from "../SelectedWeatherSlice/SelectedWeatherSlice";
import SelectedDayForecast from "../SelectedDayForecast/SelectedDayForecast";
import ForecastList from "../ForecastList/ForecastList";
import { ReactComponent as Loading } from "../../resources/images/svg/loading.svg";
import { AnimatePresence, motion } from "framer-motion";
import uuid from "react-uuid";

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

  const animations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
  };

  return (
    <div className="weather-board">
      <AnimatePresence mode="wait">
        {state.loading ? (
          <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "spring", bounce: 0.45 }}
          >
            <Loading className="loading" />
          </motion.div>
        ) : state.weather.current === undefined ? (
          <motion.div
            key="failed"
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "spring", bounce: 0.45 }}
          >
            <h1 className="fail">City not found</h1>
            <h2 className="fail-text">
              Sorry, we couldn't find any weather data for the city you
              provided.
              <br />
              Please try another one.
            </h2>
          </motion.div>
        ) : (
          <>
            <motion.div
              key="daily"
              variants={animations}
              initial="initial"
              animate="animate"
              exit="exit"
              className="daily"
              transition={{ type: "spring", bounce: 0.45 }}
            >
              <SelectedWeatherSlice />
              <SelectedDayForecast />
            </motion.div>

            <motion.div
              key="weekly"
              variants={animations}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", bounce: 0.45 }}
            >
              <ForecastList />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
