const toggleMinimize = (e: React.MouseEvent) => {
  const target = document.getElementById("weather-window");
  if (target?.classList.contains("window")) {
    target.classList.remove("window");
    target.classList.add("window-minimized");
  } else if (target?.classList.contains("window-minimized")) {
    target.classList.remove("window-minimized");
    target.classList.add("window");
  }
};

export default toggleMinimize;
