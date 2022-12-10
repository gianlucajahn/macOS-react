import React from 'react';
import { ReactComponent as Arrow } from '../../resources/images/svg/arrow.svg';
import { ReactComponent as Chat } from '../../resources/images/svg/chat.svg';
import { ReactComponent as Cat } from '../../resources/images/svg/githubcat.svg';
import "./QueryBoardLinks.scss";

export default function QueryBoardLinks () {
  return (
    <>
    <div className="dot red" />
      <div className="dot yellow" />
      <div className="dot green" />

      <button className="nav back-btn">
        <Arrow className="arrow back svg" id="svg" />
        
      </button>
      <button className="nav forward-btn">
        <Arrow className="arrow forward svg" id="svg" />
      </button>

      <a href="https://www.linkedin.com/in/gianlucajahn/" target="_blank">
        <button className="nav chat-btn">
          <img className="chat" src={require("../../resources/images/linkedin.png")} />
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
