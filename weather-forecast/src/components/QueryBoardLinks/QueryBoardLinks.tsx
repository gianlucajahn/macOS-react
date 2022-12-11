import React from 'react';
import { ReactComponent as Arrow } from '../../resources/images/svg/arrow.svg';
import { ReactComponent as Chat } from '../../resources/images/svg/chat.svg';
import { ReactComponent as Cat } from '../../resources/images/svg/githubcat.svg';
import { ReactComponent as Close } from '../../resources/images/svg/close.svg';
import { ReactComponent as Minimize } from '../../resources/images/svg/minimize.svg';
import { ReactComponent as Stretch } from '../../resources/images/svg/stretch.svg';
import "./QueryBoardLinks.scss";

export default function QueryBoardLinks () {
  const toggleVisibility = (e: React.MouseEvent) => {
    const target = document.getElementById('weather-window');
    if (target?.classList.contains('window')) {
      target.classList.remove('window');
      target.classList.add('window-closed');
    } else if (target?.classList.contains('window-closed')) {
      target.classList.remove('window-closed');
      target.classList.add('window');
    }
  }

  const toggleMinimize = (e: React.MouseEvent) => {
    const target = document.getElementById('weather-window');
    if (target?.classList.contains('window')) {
      target.classList.remove('window');
      target.classList.add('window-minimized');
    } else if (target?.classList.contains('window-minimized')) {
      target.classList.remove('window-minimized');
      target.classList.add('window');
    }
  }

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
