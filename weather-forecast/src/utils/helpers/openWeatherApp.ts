const openWeatherApp = (e: any) => {
  const weatherApp = document.getElementById("weather-window");
  if (weatherApp?.classList.contains("window-minimized")) {
    weatherApp.classList.remove("window-minimized");
    weatherApp.classList.add("window");
    return;
  }

  if (weatherApp?.classList.contains("window-closed")) {
    weatherApp.classList.remove("window-closed");
    weatherApp.classList.add("window");
    return;
  }
};

export default openWeatherApp;
