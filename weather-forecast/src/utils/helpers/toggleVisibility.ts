const toggleVisibility = (e: React.MouseEvent) => {
  const target = document.getElementById("weather-window");
  if (target?.classList.contains("window")) {
    target.classList.remove("window");
    target.classList.add("window-closed");
  } else if (target?.classList.contains("window-closed")) {
    target.classList.remove("window-closed");
    target.classList.add("window");
  }
};

export default toggleVisibility;
