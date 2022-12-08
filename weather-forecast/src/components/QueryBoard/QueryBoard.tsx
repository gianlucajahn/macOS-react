import React, { useState, useReducer,useContext, useEffect } from 'react';
import { store } from '../../App';
import inputWork from '../../utils/keys/helpers/inputWork';
import './QueryBoard.scss';

export default function QueryBoard () {
  const [state, dispatch] = useContext(store);

  return (
    <div className="query-board">
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
