const toggleWallpaperMin = (e: React.MouseEvent) => {
    const eventTarget = e.target as HTMLDivElement;
    console.log(eventTarget);

    const target = document.getElementById("wallpaper-menu");
    if (target?.classList.contains("wallpaper-menu")) {
      target.classList.remove("wallpaper-menu");
      target.classList.add("wallpaper-menu-minimized");
    } else if (target?.classList.contains("wallpaper-menu-minimized")) {
      target.classList.remove("wallpaper-menu-minimized");
      target.classList.add("wallpaper-menu");
    }
  };
  
  export default toggleWallpaperMin;