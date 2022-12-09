import React, { useState, useReducer,useContext, useEffect } from 'react';
import { store } from '../../App';
import inputWork from '../../utils/keys/helpers/inputWork';
import { ReactComponent as Arrow } from '../../resources/images/svg/arrow.svg';
import { ReactComponent as Chat } from '../../resources/images/svg/chat.svg';
import { ReactComponent as Cat } from '../../resources/images/svg/githubcat.svg';
import './QueryBoard.scss';

export default function QueryBoard () {
  const [state, dispatch] = useContext(store);

  return (
    <div className="query-board">
      <div className="dot red" />
      <div className="dot yellow" />
      <div className="dot green" />

      <button className="nav back-btn">
        <Arrow className="arrow back" />
      </button>
      <button className="nav forward-btn">
        <Arrow className="arrow forward" />
      </button>

      <button className="nav chat-btn">
        <Chat className="chat" />
      </button>

      <button className="nav github-btn">
        <Cat className="cat" />
      </button>

      <input 
        type="text" 
        placeholder="Your City" 
        value={state.query} 
        onChange={(e) => dispatch({ 
          type: "query/SEARCH", 
          payload: e.currentTarget.value 
        })} 
        onKeyUp={(e) => { if(e.key === "Enter") {
          inputWork(state.query).then((weather) => {
            dispatch({
              type: 'query/SUBMIT',
              payload: weather
            });
          });
        }}}
      />
    </div>
  );
}
