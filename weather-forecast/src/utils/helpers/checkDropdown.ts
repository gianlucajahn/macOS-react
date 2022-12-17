const checkDropdown = (e: React.MouseEvent) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains("dd")) {
    return true;
  } else if (target.classList.contains("section")) {
    return true;
  } else {
    return false;
  }
};

export default checkDropdown;
