import React, { useState, useReducer,useContext, useEffect } from 'react';
import { store } from '../../App';
import inputWork from '../../utils/keys/helpers/inputWork';
import { ReactComponent as Arrow } from '../../resources/images/svg/arrow.svg';
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
