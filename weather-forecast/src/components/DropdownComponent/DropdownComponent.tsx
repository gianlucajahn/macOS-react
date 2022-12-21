import React, { useContext } from "react";
import getDropdownContent from "../../utils/helpers/getDropdownContent";
import { store } from "../../App";
import "./DropdownComponent.scss";
import clearStorage from "../../utils/helpers/clearStorage";

export default function DropdownComponent() {
  const [state, dispatch] = useContext(store);
  const content = getDropdownContent(state);

  return (
    <div
      className={`dd dropdown-menu ${
        state.section === "logo"
          ? "dd-logo"
          : state.section === "finder"
          ? "dd-finder"
          : state.section === "file"
          ? "dd-file"
          : state.section === "edit"
          ? "dd-edit"
          : state.section === "view"
          ? "dd-view"
          : state.section === "go"
          ? "dd-go"
          : state.section === "windows"
          ? "dd-windows"
          : state.section === "help"
          ? "dd-help"
          : ""
      }`}
    >
      {content.map((item, i) => {
        if (item.name === "divider") {
          return <div className="divider dd" />;
        }

        return (
          <div
            className={`dropdown-item dd ${
              state.section === "logo"
                ? "di-logo"
                : state.section === "finder"
                ? "di-finder"
                : state.section === "file"
                ? "di-file"
                : state.section === "edit"
                ? "di-edit"
                : state.section === "view"
                ? "di-view"
                : state.section === "go"
                ? "di-go"
                : state.section === "windows"
                ? "di-windows"
                : state.section === "help"
                ? "di-help"
                : ""
            } ${item.available ? "selectable" : "unselectable"}`}
            style={{
              color: item.available ? "white" : "rgba(255, 255, 255, 0.55)",
            }}
            onClick={(e) => {
              if (item.name === "Restart") {
                localStorage.clear();
                window.location.reload();
              }

              dispatch({
                type: "section/CHECK",
                payload: e.target,
              });
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
