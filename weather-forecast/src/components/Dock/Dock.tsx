import React, { MouseEvent, useContext } from "react";
import { store } from "../../App";
import identifyDockItem from "../../utils/helpers/identifyDockItem";
import openWeatherApp from "../../utils/helpers/openWeatherApp";
import toggleWallpaperVis from "../../utils/helpers/toggleWallpaperVis";
import "./Dock.scss";

export default function Dock() {
  const [state, dispatch] = useContext(store);

  const selectDockItem = (e: MouseEvent) => {
    const id = identifyDockItem(e.target);
    dispatch({
      type: "dock/SELECT",
      payload: id,
    });
  };

  const resetDock = (e: MouseEvent) => {
    dispatch({
      type: "dock/RESET",
    });
  };

  const openWallpaperWindow = (e: React.MouseEvent) => {
    if (state.settings.wallpaper.open) {
      toggleWallpaperVis(e);
    }

    dispatch({
      type: "wallpaper/TOGGLE",
    });
  };

  return (
    <>
      <div className="dock">
        <div
          className={`dock-item ${state.dockItem === 0 ? "hovered" : ""} ${
            state.dockItem === 1
              ? "distance-1"
              : state.dockItem === 2
              ? "distance-2"
              : ""
          }`}
          id="0"
          onMouseEnter={selectDockItem}
          onMouseLeave={resetDock}
        >
          <div className="tool-tip">Finder</div>
          <img
            alt="Finder"
            className={`dock-icon finder`}
            src={require("../../resources/images/webp/finder.png")}
          />
          <div className="point" />
        </div>
        <div className="division" />
        <div
          className={`dock-item ${state.dockItem === 1 ? "hovered" : ""} ${
            state.dockItem === 0
              ? "distance-1"
              : state.dockItem === 2
              ? "distance-1"
              : state.dockItem === 3
              ? "distance-2"
              : ""
          }`}
          id="1"
          onMouseEnter={selectDockItem}
          onMouseLeave={resetDock}
          onClick={openWallpaperWindow}
        >
          <div className="tool-tip">Photos</div>
          <img
            alt="Photos"
            className="dock-icon"
            src={require("../../resources/images/webp/photos.png")}
          />
          <div
            className="point"
            style={{
              visibility: document
                .getElementById("wallpaper-menu")
                ?.classList.contains("wallpaper-menu")
                ? "visible"
                : "hidden",
            }}
          />
        </div>
        <div
          className={`dock-item no-point ${
            state.dockItem === 2 ? "hovered" : ""
          } ${
            state.dockItem === 0
              ? "distance-2"
              : state.dockItem === 1
              ? "distance-1"
              : state.dockItem === 3
              ? "distance-1"
              : state.dockItem === 4
              ? "distance-2"
              : ""
          }`}
          id="2"
          onMouseEnter={selectDockItem}
          onMouseLeave={resetDock}
        >
          <div className="tool-tip">Calculator</div>
          <img
            alt="Calculator"
            className="dock-icon"
            src={require("../../resources/images/webp/calculator.png")}
          />
        </div>
        <div
          className={`dock-item no-point ${
            state.dockItem === 3 ? "hovered" : ""
          } ${
            state.dockItem === 1
              ? "distance-2"
              : state.dockItem === 2
              ? "distance-1"
              : state.dockItem === 4
              ? "distance-1"
              : state.dockItem === 5
              ? "distance-2"
              : ""
          }`}
          id="3"
          onMouseEnter={selectDockItem}
          onMouseLeave={resetDock}
        >
          <div className="tool-tip">Calendar</div>
          <img
            alt="Calendar"
            className="dock-icon"
            src={require("../../resources/images/webp/calendar.png")}
          />
        </div>
        <div
          className={`dock-item no-point ${
            state.dockItem === 4 ? "hovered" : ""
          } ${
            state.dockItem === 2
              ? "distance-2"
              : state.dockItem === 3
              ? "distance-1"
              : state.dockItem === 5
              ? "distance-1"
              : state.dockItem === 6
              ? "distance-2"
              : ""
          }`}
          id="4"
          onMouseEnter={selectDockItem}
          onMouseLeave={resetDock}
          onClick={() =>
            window.open("https://code.visualstudio.com/", "_blank")
          }
        >
          <div className="tool-tip">VSCode</div>
          <img
            alt="VSCode"
            className="dock-icon"
            src={require("../../resources/images/webp/vscode.png")}
          />
        </div>
        <div
          className={`dock-item no-point ${
            state.dockItem === 5 ? "hovered" : ""
          } ${
            state.dockItem === 3
              ? "distance-2"
              : state.dockItem === 4
              ? "distance-1"
              : state.dockItem === 6
              ? "distance-1"
              : state.dockItem === 7
              ? "distance-2"
              : ""
          }`}
          id="5"
          onMouseEnter={selectDockItem}
          onMouseLeave={resetDock}
          onClick={() =>
            window.open("https://www.apple.com/de/apple-music/", "_blank")
          }
        >
          <div className="tool-tip">Music</div>
          <img
            alt="Apple Music"
            className="dock-icon"
            src={require("../../resources/images/webp/applemusic.png")}
          />
        </div>
        <div className="division" />
        <div
          className={`dock-item ${state.dockItem === 6 ? "hovered" : ""} ${
            state.dockItem === 4
              ? "distance-2"
              : state.dockItem === 5
              ? "distance-1"
              : state.dockItem === 7
              ? "distance-1"
              : state.dockItem === 8
              ? "distance-2"
              : ""
          }`}
          id="6"
          onMouseEnter={selectDockItem}
          onMouseLeave={resetDock}
          onClick={openWeatherApp}
        >
          <div className="tool-tip">Weather</div>
          <img
            alt="Weather App"
            className="dock-icon"
            src={require("../../resources/images/webp/weather.png")}
          />
          <div
            className="point"
            style={{
              visibility: document
                .getElementById("weather-window")
                ?.classList.contains("window")
                ? "visible"
                : "hidden",
            }}
          />
        </div>
        <div
          className={`dock-item ${state.dockItem === 7 ? "hovered" : ""} ${
            state.dockItem === 5
              ? "distance-2"
              : state.dockItem === 6
              ? "distance-1"
              : state.dockItem === 8
              ? "distance-1"
              : state.dockItem === 9
              ? "distance-2"
              : ""
          }`}
          id="7"
          onMouseEnter={selectDockItem}
          onMouseLeave={resetDock}
          onClick={() =>
            window.open("https://github.com/gianlucajahn/macOS-react", "_blank")
          }
        >
          <div className="tool-tip">GitHub</div>
          <img
            alt="GitHub"
            className="dock-icon"
            src={require("../../resources/images/webp/github.png")}
          />
          <div className="point" />
        </div>
        <div className="division" />
        <div
          className={`dock-item ${state.dockItem === 8 ? "hovered" : ""} ${
            state.dockItem === 6
              ? "distance-2"
              : state.dockItem === 7
              ? "distance-1"
              : state.dockItem === 9
              ? "distance-1"
              : ""
          }`}
          id="8"
          onMouseEnter={selectDockItem}
          onMouseLeave={resetDock}
          onClick={() => window.open("https://de.scalable.capital/", "_blank")}
        >
          <div className="tool-tip">Scalable</div>
          <img
            alt="Scalable Capital"
            className="dock-icon"
            src={require("../../resources/images/webp/scalable.png")}
          />
          <div className="point" />
        </div>
        <div className="division" />
        <div
          className={`dock-item ${state.dockItem === 9 ? "hovered" : ""} ${
            state.dockItem === 7
              ? "distance-2"
              : state.dockItem === 8
              ? "distance-1"
              : ""
          }`}
          id="9"
          onMouseEnter={selectDockItem}
          onMouseLeave={resetDock}
          onClick={() => window.open("https://twitter.com/Apple", "_blank")}
        >
          <div className="tool-tip">Twitter</div>
          <img
            alt="Twitter"
            className="dock-icon"
            src={require("../../resources/images/webp/twitter.png")}
          />
          <div className="point" />
        </div>
      </div>
    </>
  );
}
