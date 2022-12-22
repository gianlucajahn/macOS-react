import React, { Children, useContext, MouseEvent, useEffect } from "react";
import { store } from "../../App";
import checkDropdown from "../../utils/helpers/checkDropdown";
import checkSettings from "../../utils/helpers/checkSettings";
import openContextMenu from "../../utils/helpers/openContextMenu";
import wallpapers from "../../utils/helpers/wallpapers";
import BootUpWindow from "../BootUpWindow/BootUpWindow";
import "./Page.scss";
import updateSysColor from "../../utils/helpers/updateSysColor";

export default function Page({ children }: any) {
  const [state, dispatch] = useContext(store);

  const conditionalClick = (e: React.MouseEvent) => {
    const contextMenu = document.getElementById("context-menu");
    // enable animation on left click after contextMenu has been displayed
    contextMenu!.style.transition = "0.2s all";
    contextMenu!.style.opacity = "0";
    contextMenu!.style.visibility = "hidden";

    const isDropdown = checkDropdown(e);
    if (isDropdown === false) {
      dispatch({
        type: "section/RESET",
      });
    }

    const isSettings = checkSettings(e);
    if (isSettings === false) {
      dispatch({
        type: "settings/CLOSE",
      });
    }
  };

  useEffect(() => {
    // check localStorage

    let color = localStorage.getItem("color");
    let boot = JSON.parse(sessionStorage.getItem("boot")!);
    let wallpaper = JSON.parse(localStorage.getItem("wallpaper")!);
    if (boot !== null && boot !== undefined) {
      dispatch({
        type: "state/BOOT",
        payload: boot.status,
      });
    }
    if (wallpaper !== null && wallpaper !== undefined) {
      let updatedWallpaper = {
        open: false,
        name: wallpaper.name,
        surname: wallpaper.surname,
        preview: wallpaper.preview,
        src: wallpaper.src,
      };

      dispatch({
        type: "state/LOCAL",
        payload: updatedWallpaper,
      });
      const page = document.getElementById("page");
      const url = require(`../../resources/images/${wallpaper.surname}.jpg`);
      page!.style.backgroundImage = `url(${url})`;
    }
    if (color !== null && color !== undefined) {
      updateSysColor(color);

      dispatch({
        type: "state/LOCALCOLOR",
        payload: color,
      });
    }

    // preload images to avoid flashing white background when switching to a
    // wallpaper that hasn't yet been loaded
    wallpapers.forEach((picture) => {
      let img = new Image();
      img.src = picture.src;
    });
  }, []);

  useEffect(() => {
    // update localStorage

    if (state.booting) {
      return;
    }
    localStorage.setItem("color", state.settings.color);
    sessionStorage.setItem(
      "boot",
      JSON.stringify({
        status: state.booting,
      })
    );
    localStorage.setItem("wallpaper", JSON.stringify(state.settings.wallpaper));
  }, [state]);

  return (
    <div
      className="page"
      id="page"
      onClick={conditionalClick}
      onContextMenu={openContextMenu}
    >
      {children}
      {state.booting ? <BootUpWindow /> : null}
    </div>
  );
}
