import React, { MouseEvent } from 'react';

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

export default openContextMenu;