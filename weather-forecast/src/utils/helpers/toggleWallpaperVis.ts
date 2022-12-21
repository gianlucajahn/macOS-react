const toggleWallpaperVis = (e: React.MouseEvent) => {
  const target = document.getElementById("wallpaper-menu");
  const eventTarget = e.target as HTMLDivElement
  console.log(eventTarget);

  if (eventTarget.id === "wallpaper-handle") {
    return;
  }

  if (target?.classList.contains("wallpaper-menu")) {
    if (eventTarget.id === "opener") {
      return;
    }
    if (eventTarget.id === "in-context") {
      return;
    }
    target.classList.remove("wallpaper-menu");
    target.classList.add("wallpaper-menu-closed");
  } else if (target?.classList.contains("wallpaper-menu-closed")) {
    target.classList.remove("wallpaper-menu-closed");
    target.classList.add("wallpaper-menu");
  } else if (target?.classList.contains("wallpaper-menu-minimized")) {
    target.classList.remove("wallpaper-menu-minimized");
    target.classList.add("wallpaper-menu");
  }
};

export default toggleWallpaperVis;