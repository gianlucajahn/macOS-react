import React, { Children, useContext, MouseEvent, useEffect } from 'react';
import { store } from '../../App';
import checkDropdown from '../../utils/helpers/checkDropdown';
import checkSettings from '../../utils/helpers/checkSettings';
import wallpapers from '../../utils/helpers/wallpapers';
import BootUpWindow from '../BootUpWindow/BootUpWindow';
import './Page.scss';

export default function Page ({children}: any) {
  const [state, dispatch] = useContext(store);

  const openContextMenu = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const contextMenu = document.getElementById('context-menu');
    // disable entry animation on contextMenu before it appears
    contextMenu!.style.transition = "none";
    contextMenu!.style.opacity = "1";

    let x = e.nativeEvent.offsetX, y = e.nativeEvent.offsetY;
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let cmWidth = contextMenu!.offsetWidth;
    let cmHeight = contextMenu!.offsetHeight;

    // if x is greater than "windows width - contextMenu width", set the x value 
    // to "window width - contextMenu width". Else, set x to the offsetX. Similarly with y.
    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

    contextMenu!.style.left = `${x}px`;
    contextMenu!.style.top = `${y}px`;
    contextMenu!.style.visibility = "visible";
  }

  const conditionalClick = (e: React.MouseEvent) => {
    const contextMenu = document.getElementById('context-menu');
    // enable animation on left click after contextMenu has been displayed
    contextMenu!.style.transition = "0.2s all";
    contextMenu!.style.opacity = "0";
    contextMenu!.style.visibility = "hidden";

    const isDropdown = checkDropdown(e);
    if (isDropdown === false) {
        dispatch({
            type: 'section/RESET'
        });
    }

    const isSettings = checkSettings(e);
    if (isSettings === false) {
      dispatch({
        type: 'settings/CLOSE'
      });
    }
  }

  useEffect(() => {
    // check localStorage

    let color = localStorage.getItem('color');
    let boot = JSON.parse(sessionStorage.getItem('boot')!);
    let wallpaper = JSON.parse(localStorage.getItem('wallpaper')!);
    if (boot !== null && boot !== undefined) {
      dispatch({
        type: 'state/BOOT',
        payload: boot.status
      });
    }
    if (wallpaper !== null && wallpaper !== undefined) {
      let updatedWallpaper = {
        open: false,
        name: wallpaper.name,
        surname: wallpaper.surname,
        preview: wallpaper.preview,
        src: wallpaper.src
      };

      dispatch({
        type: 'state/LOCAL',
        payload: updatedWallpaper
      });
      const page = document.getElementById("page");
      const url = require(`../../resources/images/${wallpaper.surname}.jpg`);
      page!.style.backgroundImage = `url(${url})`;
    }
    if (color !== null && color !== undefined) {
      dispatch({
        type: 'state/LOCALCOLOR',
        payload: color
      });
    }


    // preload images to avoid flashing white background when switching to a
    // wallpaper that hasn't yet been loaded
    wallpapers.forEach((picture) => {
      let img = new Image();
      img.src = picture.src
    });
  }, [])

  useEffect(() => {
    // update localStorage

    if (state.booting) {
      return
    }
    localStorage.setItem('color', state.settings.color);
    sessionStorage.setItem('boot', JSON.stringify({
      status: state.booting
    }));
    localStorage.setItem('wallpaper', JSON.stringify(state.settings.wallpaper));
  }, [state])

  return (
    <div className="page" id="page" onClick={conditionalClick} onContextMenu={openContextMenu}>
      {children}
      {state.booting ? <BootUpWindow /> : null}
    </div>
  );
}
