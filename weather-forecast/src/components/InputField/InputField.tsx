import React, { useContext, useState } from 'react';
import { store } from '../../App';
import inputWork from '../../utils/keys/helpers/inputWork';
import { ReactComponent as Lock } from "../../resources/images/svg/lock.svg";
import { ReactComponent as Search } from "../../resources/images/svg/search.svg";
import './InputField.scss';

export default function InputField () {
  const [state, dispatch] = useContext(store);

  return (
    <div className="input-container">
        <Search className="search" />
        <Lock className="lock" />
        <img className="refresh" src={require("../../resources/images/refresh.png")} />

        <input 
          type="text" 
          className="inputField"
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
