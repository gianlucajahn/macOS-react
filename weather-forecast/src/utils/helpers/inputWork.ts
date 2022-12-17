import intervalType from "../../types/intervalType";
import sortedIntervalType from "../../types/sortedInterval";
import apiKey from "../keys/key";

const inputWork = async function (query: string) {
  // fetch current weather data
  const currentResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`
  );
  let current: any = 0;
  try {
    current = await currentResponse.json();
  } catch(err) {
    return;
  }

  console.log(current);
  if (current.cod === "404" || current.cod === "400") {
    const newWeather = {
      current: undefined,
      forecast: undefined
    }
    return newWeather;
  }

  const currentObject = {
    country: current.sys.country,
    town: current.name,
    wind: current.wind.speed,
    weather: current.weather[0].main,
    temp: Math.round(current.main.temp),
    feelsTemp: Math.round(current.main.feels_like),
    hours:
      new Date(current.dt * 1000).getHours() > 12
        ? new Date(current.dt * 1000).getHours() - 12 + "PM"
        : new Date(current.dt * 1000).getHours() + "AM",
    maxTemp: Math.round(current.main.temp_max),
    minTemp: Math.round(current.main.temp_min),
    humidity: current.main.humidity,
    rain: current.clouds["all"],
  };

  let location = [current.coord.lat.toString(), current.coord.lon.toString()];
  console.log(location);
  // fetch 5 day forecast data for selected city and save it in forecastData state
  const forecastResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${location[0]}&lon=${location[1]}&appid=${apiKey}&units=metric`
  );
  const forecast = await forecastResponse.json();

  // get current date to use in comparison in forecast intervals
  const date = new Date();
  const allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // create (unordered) cleaned up forecastArray with exclusively noteworthy informations
  // based on forecast array from the response object
  let forecastArray: sortedIntervalType[] = [];
  forecast.list.forEach((interval: intervalType, i: number) => {
    const newIntervalObject = {
      wind: interval.wind.speed,
      weather: interval.weather[0].main,
      temp: Math.round(interval.main.temp),
      feelsTemp: Math.round(interval.main.feels_like),
      maxTemp: Math.round(interval.main.temp_max),
      minTemp: Math.round(interval.main.temp_min),
      humidity: interval.main.humidity,
      rain: interval.clouds["all"],
      date: new Date(interval.dt * 1000),
      hours:
        new Date(interval.dt * 1000).getHours() > 12
          ? new Date(interval.dt * 1000).getHours() - 12 + "PM"
          : new Date(interval.dt * 1000).getHours() + "AM",
      dateName: allDays[new Date(interval.dt * 1000).getDay()],
      dateNum: new Date(interval.dt * 1000).getDay(),
      time: date.getHours(),
    };
    forecastArray.push(newIntervalObject);
  });

  // declare variable to save forecast objects in, sorted after days
  const daysArray: sortedIntervalType[] = [];

  // populate sorted forecast array with values from cleaned forecast array
  let previousDayName = forecastArray[0].dateName;
  let todaysIntervals: any = [];
  for (const interval of forecastArray) {
    if (daysArray.length === 0) {
      todaysIntervals = forecastArray.filter(
        (element: sortedIntervalType) => element.dateName === previousDayName
      );
      daysArray.push(todaysIntervals);
    }

    if (interval.dateName !== previousDayName) {
      previousDayName = interval.dateName;
      todaysIntervals = forecastArray.filter(
        (element: sortedIntervalType) => element.dateName === previousDayName
      );
      daysArray.push(todaysIntervals);
    }
  }

  // return newWeather
  const newWeather = {
    current: currentObject,
    forecast: daysArray,
  };
  return newWeather;
};

export default inputWork;
