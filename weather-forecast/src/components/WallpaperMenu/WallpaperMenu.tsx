import React, { useContext } from "react";
import Draggable from "react-draggable";
import { store } from "../../App";
import "./WallpaperMenu.scss";
import { ReactComponent as Close } from "../../resources/images/svg/close.svg";
import { ReactComponent as Minimize } from "../../resources/images/svg/minimize.svg";
import { ReactComponent as Stretch } from "../../resources/images/svg/stretch.svg";
import wallpapers from "../../utils/helpers/wallpapers";
import toggleWallpaperVis from "../../utils/helpers/toggleWallpaperVis";
import toggleWallpaperMin from "../../utils/helpers/toggleWallpaperMin";
import wallpaperObjectType from "../../types/wallpaperObjectType";
import returnColor from "../../utils/helpers/returnColor";
import toggleBorder from "../../utils/helpers/toggleBorder";

export default function WallpaperMenu() {
  const [state, dispatch] = useContext(store);

  const changeWallpaper = (wallpaper: any) => {
    dispatch({
      type: "wallpaper/CHANGE",
      payload: {
        name: wallpaper.name,
        surname: wallpaper.surname,
        preview: `../../resources/images/preview_${wallpaper.surname}.jpg`,
        src: `../../resources/images/${wallpaper.surname}.jpg`,
      },
    });

    const page = document.getElementById("page");
    const url = require(`../../resources/images/${wallpaper.surname}.jpg`);
    page!.style.backgroundImage = `url(${url})`;
  };

  return (
    <Draggable
      handle="#wallpaper-handle"
      onStart={(e: any) => {
        if (e.target.id !== "wallpaper-handle") {
          return false;
        }
      }}
    >
      {state.settings.wallpaper.open ? (
        <div className="wallpaper-menu wallp" id="wallpaper-menu">
          <section className="handle" id="wallpaper-handle">
            <div className="dots">
              <div className="dot red" onClick={toggleWallpaperVis}>
                <Close className="close" />
              </div>
              <div className="dot yellow" onClick={toggleWallpaperMin}>
                <Minimize className="minimize" />
              </div>
              <div className="dot green">
                <Stretch className="stretch" />
              </div>
            </div>
            Wallpaper
          </section>

          <section className="selection">
            <div className="prev">
              <img
                alt="Current Wallpaper"
                className="current"
                src={
                  state.settings.wallpaper.name === "Catalina"
                    ? require("../../resources/images/catalina_day.jpg")
                    : require(`../../resources/images/${state.settings.wallpaper.surname}.jpg`)
                }
              />
              <h1>{state.settings.wallpaper.name}</h1>
              <h2>Dynamic Wallpaper</h2>

              <div className="check">
                <input type="checkbox" />
                <h2>Change dark/light mode as wallpapers change</h2>
              </div>
            </div>

            <div className="wallpaper-selector">
              <h1>Dynamic Wallpapers</h1>

              <div className="grid">
                {wallpapers.map(
                  (wallpaperObject: wallpaperObjectType, i: number) => {
                    return (
                      <div className="item-container">
                        <img
                          alt="wallpaper"
                          className={`image-wrapper`}
                          onMouseEnter={toggleBorder}
                          onMouseLeave={toggleBorder}
                          src={require(`../../resources/images/preview_${wallpaperObject.surname}.jpg`)}
                          onClick={() => changeWallpaper(wallpaperObject)}
                          style={{
                            borderColor: returnColor(state.settings.color),
                          }}
                        />
                        <h2>{wallpaperObject.name}</h2>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div />
      )}
    </Draggable>
  );
}
