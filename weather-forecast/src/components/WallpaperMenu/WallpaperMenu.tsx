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

export default function WallpaperMenu() {
  const [state, dispatch] = useContext(store);

  const toggleBorder = (e: React.MouseEvent) => {
    const target = e.target as HTMLImageElement;
    if (target.classList.contains('image-wrapper-bordered')) {
        target.classList.remove('image-wrapper-bordered');
    } else {
        target.classList.add('image-wrapper-bordered');
    }
  }

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
        <div className="wallpaper-menu-closed wallp" id="wallpaper-menu">
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
                className="current"
                src={require("../../resources/images/catalina.jpg")}
              />
              <h1>Catalina</h1>
              <h2>Dynamic Wallpaper</h2>

              <div className="check">
                <input type="checkbox" />
                <h2>Change dark/light mode as wallpapers change</h2>
              </div>
            </div>

            <div className="wallpaper-selector">
                <h1>Dynamic Wallpapers</h1>

                <div className="grid">
                    {wallpapers.map((wallpaperObject: any, i: number) => {
                        return (
                            <div className="item-container">
                                <img className={`image-wrapper`} onMouseEnter={toggleBorder} onMouseLeave={toggleBorder} src={require(`../../resources/images/preview_${wallpaperObject.surname}.jpg`)} />
                                <h2>{wallpaperObject.name}</h2>
                            </div>
                        )
                    })}
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
