import React from 'react';
import './Dock.scss';

export default function Dock () {
  return (
    <>
        <div className="dock">
            <div className="dock-item">
              <img className="dock-icon finder" src={require("../../resources/images/webp/finder.png")} />
              <div className="point" />
            </div>
            <div className="division" />
            <div className="dock-item no-point">
              <img className="dock-icon" src={require("../../resources/images/webp/photos.png")} />
            </div>
            <div className="dock-item no-point">
              <img className="dock-icon" src={require("../../resources/images/webp/calculator.png")} />
            </div>
            <div className="dock-item no-point">
              <img className="dock-icon" src={require("../../resources/images/webp/calendar.png")} />
            </div>
            <div className="dock-item no-point">
              <img className="dock-icon" src={require("../../resources/images/webp/vscode.png")} />
            </div>
            <div className="dock-item no-point">
              <img className="dock-icon" src={require("../../resources/images/webp/applemusic.png")} />
            </div>
            <div className="division" />
            <div className="dock-item no-point">
              <img className="dock-icon" src={require("../../resources/images/webp/weather.png")} />
            </div>
            <div className="dock-item">
              <img className="dock-icon" src={require("../../resources/images/webp/github.png")} />
              <div className="point" />
            </div>
            <div className="division" />
            <div className="dock-item">
              <img className="dock-icon" src={require("../../resources/images/webp/scalable.png")} />
              <div className="point" />
            </div>
            <div className="division" />
            <div className="dock-item">
              <img className="dock-icon" src={require("../../resources/images/webp/twitter.png")} />
              <div className="point" />
            </div>
        </div>
    </>
  );
}
