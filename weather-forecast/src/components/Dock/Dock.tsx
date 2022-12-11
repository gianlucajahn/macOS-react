import React from 'react';
import './Dock.scss';

export default function Dock () {
  return (
    <>
        <div className="dock">
            <div className="dock-item">
              <div className="tool-tip">Finder</div>
              <img className="dock-icon finder" src={require("../../resources/images/webp/finder.png")} />
              <div className="point" />
            </div>
            <div className="division" />
            <div className="dock-item no-point">
              <div className="tool-tip">Photos</div>
              <img className="dock-icon" src={require("../../resources/images/webp/photos.png")} />
            </div>
            <div className="dock-item no-point">
              <div className="tool-tip">Calculator</div>
              <img className="dock-icon" src={require("../../resources/images/webp/calculator.png")} />
            </div>
            <div className="dock-item no-point">
              <div className="tool-tip">Calendar</div>
              <img className="dock-icon" src={require("../../resources/images/webp/calendar.png")} />
            </div>
            <div className="dock-item no-point">
              <div className="tool-tip">VSCode</div>
              <img className="dock-icon" src={require("../../resources/images/webp/vscode.png")} />
            </div>
            <div className="dock-item no-point">
              <div className="tool-tip">Music</div>
              <img className="dock-icon" src={require("../../resources/images/webp/applemusic.png")} />
            </div>
            <div className="division" />
            <div className="dock-item no-point">
              <div className="tool-tip">Weather</div>
              <img className="dock-icon" src={require("../../resources/images/webp/weather.png")} />
            </div>
            <div className="dock-item">
              <div className="tool-tip">GitHub</div>
              <img className="dock-icon" src={require("../../resources/images/webp/github.png")} />
              <div className="point" />
            </div>
            <div className="division" />
            <div className="dock-item">
              <div className="tool-tip">Scalable</div>
              <img className="dock-icon" src={require("../../resources/images/webp/scalable.png")} />
              <div className="point" />
            </div>
            <div className="division" />
            <div className="dock-item">
              <div className="tool-tip">Twitter</div>
              <img className="dock-icon" src={require("../../resources/images/webp/twitter.png")} />
              <div className="point" />
            </div>
        </div>
    </>
  );
}
