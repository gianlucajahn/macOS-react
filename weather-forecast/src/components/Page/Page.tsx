import React, { Children, useContext, MouseEvent } from 'react';
import { store } from '../../App';
import checkDropdown from '../../utils/keys/helpers/checkDropdown';
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
  }

  return (
    <div className="page" id="page" onClick={conditionalClick} onContextMenu={openContextMenu}>
      {children}
    </div>
  );
}
