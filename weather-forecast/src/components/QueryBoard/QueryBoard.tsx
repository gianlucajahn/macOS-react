import React, { useState, useReducer,useContext, useEffect } from 'react';
import { store } from '../../App';
import inputWork from '../../utils/keys/helpers/inputWork';
import { ReactComponent as Arrow } from '../../resources/images/svg/arrow.svg';
import { ReactComponent as Chat } from '../../resources/images/svg/chat.svg';
import { ReactComponent as Cat } from '../../resources/images/svg/githubcat.svg';
import './QueryBoard.scss';
import InputField from '../InputField/InputField';
import toggleFullscreen from '../../utils/keys/helpers/toggleFullscreen';

export default function QueryBoard () {
  return (
    <div className="query-board" id="handle">
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

      <InputField />

      <button className="nav cookies-btn">
        <img className="cookies" src={require("../../resources/images/cookies.png")} />
      </button>

      <button className="nav fullscreen-btn" onClick={toggleFullscreen}>
        <img className="fullscreen" src={require("../../resources/images/fullscreen.png")} />
      </button>
    </div>
  );
}
