const updateSysColor = (color: string) => {
  if (color === "orange") {
    document.documentElement.style.setProperty("--user-color", "#ff9d0a");
  } else if (color === "green") {
    document.documentElement.style.setProperty("--user-color", "#2ed157");
  } else if (color === "babyblue") {
    document.documentElement.style.setProperty("--user-color", "#66d4ff");
  } else if (color === "blue") {
    document.documentElement.style.setProperty("--user-color", "#0a85ff");
  } else if (color === "purple") {
    document.documentElement.style.setProperty("--user-color", "#5e5ce6");
  } else if (color === "violet") {
    document.documentElement.style.setProperty("--user-color", "#bf5af2");
  } else if (color === "red") {
    document.documentElement.style.setProperty("--user-color", "#ff3860");
  }
};

export default updateSysColor;
