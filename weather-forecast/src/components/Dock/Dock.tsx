import React from 'react';
import './Dock.scss';

export default function Dock () {
  return (
    <>
        <div className="dock">
            <img className="dock-icon finder" src={require("../../resources/images/webp/finder.png")} />
            <div className="division" />
            <img className="dock-icon" src={require("../../resources/images/webp/photos.png")} />
            <img className="dock-icon" src={require("../../resources/images/webp/calculator.png")} />
            <img className="dock-icon" src={require("../../resources/images/webp/calendar.png")} />
            <img className="dock-icon" src={require("../../resources/images/webp/vscode.png")} />
            <img className="dock-icon" src={require("../../resources/images/webp/applemusic.png")} />
            <div className="division" />
            <img className="dock-icon" src={require("../../resources/images/webp/weather.png")} />
            <img className="dock-icon" src={require("../../resources/images/webp/github.png")} />
            <div className="division" />
            <img className="dock-icon" src={require("../../resources/images/webp/scalable.png")} />
            <div className="division" />
            <img className="dock-icon" src={require("../../resources/images/webp/twitter.png")} />
        </div>
    </>
  );
}
