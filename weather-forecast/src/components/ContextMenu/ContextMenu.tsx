import React, { useContext } from "react";
import { store } from "../../App";
import toggleWallpaperVis from "../../utils/helpers/toggleWallpaperVis";
import "./ContextMenu.scss";

export default function ContextMenu() {
  const [state, dispatch] = useContext(store);

  const openWallpaperWindow = (e: React.MouseEvent) => {
    if (state.settings.wallpaper.open) {
      toggleWallpaperVis(e);
    }

    dispatch({
      type: "wallpaper/TOGGLE",
    });
  };

  return (
    <div className="context-menu" id="context-menu">
      <div className="dropdown-item context-item first">New Folder</div>

      <div className="divider context-divider" />

      <div className="dropdown-item context-item">Get Info</div>

      <div
        className="dropdown-item context-item"
        id="in-context"
        onClick={openWallpaperWindow}
      >
        Change Desktop Background
      </div>

      <div className="divider context-divider" />

      <div className="dropdown-item context-item">Use Stacks</div>

      <div className="dropdown-item context-item">Sort By</div>

      <div className="dropdown-item context-item">Clean Up</div>

      <div className="dropdown-item context-item">Clean Up By</div>

      <div className="dropdown-item context-item">Show View Options</div>
    </div>
  );
}
