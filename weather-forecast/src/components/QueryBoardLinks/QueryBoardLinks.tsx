import React from "react";
import { ReactComponent as Arrow } from "../../resources/images/svg/arrow.svg";
import { ReactComponent as Chat } from "../../resources/images/svg/chat.svg";
import { ReactComponent as Cat } from "../../resources/images/svg/githubcat.svg";
import { ReactComponent as Close } from "../../resources/images/svg/close.svg";
import { ReactComponent as Minimize } from "../../resources/images/svg/minimize.svg";
import { ReactComponent as Stretch } from "../../resources/images/svg/stretch.svg";
import "./QueryBoardLinks.scss";
import toggleVisibility from "../../utils/helpers/toggleVisibility";
import toggleMinimize from "../../utils/helpers/toggleMinimize";

export default function QueryBoardLinks() {
  return (
    <>
      <div className="dots">
        <div className="dot red" onClick={toggleVisibility}>
          <Close className="close" />
        </div>
        <div className="dot yellow" onClick={toggleMinimize}>
          <Minimize className="minimize" />
        </div>
        <div className="dot green">
          <Stretch className="stretch" />
        </div>
      </div>

      <button className="nav back-btn">
        <Arrow className="arrow back svg" id="svg" />
      </button>
      <button className="nav forward-btn">
        <Arrow className="arrow forward svg" id="svg" />
      </button>

      <a href="https://www.linkedin.com/in/gianlucajahn/" target="_blank">
        <button className="nav chat-btn">
          <img
            alt="Chat"
            className="chat"
            src={require("../../resources/images/linkedin.png")}
          />
        </button>
      </a>

      <a href="https://www.github.com/gianlucajahn" target="_blank">
        <button className="nav github-btn">
          <Cat className="cat svg" id="svg" />
        </button>
      </a>
    </>
  );
}
