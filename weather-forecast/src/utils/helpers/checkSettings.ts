const checkSettings = (e: React.MouseEvent) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains("set")) {
    return true;
  } else {
    return false;
  }
};

export default checkSettings;
