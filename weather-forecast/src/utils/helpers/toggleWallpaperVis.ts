const toggleWallpaperVis = (e: React.MouseEvent) => {
  const target = document.getElementById("wallpaper-menu");
  if (target?.classList.contains("wallpaper-menu")) {
    target.classList.remove("wallpaper-menu");
    target.classList.add("wallpaper-menu-closed");
  } else if (target?.classList.contains("wallpaper-menu-closed")) {
    target.classList.remove("wallpaper-menu-closed");
    target.classList.add("wallpaper-menu");
  }
};

export default toggleWallpaperVis;