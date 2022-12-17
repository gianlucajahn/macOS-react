const identifyDockItem = (target: any) => {
  // return if the dock bar is hovered
  if (target.classList.contains("dock")) {
    return;
  }

  if (!target.classList.contains("dock-item")) {
    target = target.parentNode;
  }

  const id = parseInt(target.id);
  return id;
};

export default identifyDockItem;
