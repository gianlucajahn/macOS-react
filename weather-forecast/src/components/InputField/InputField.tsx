import React, { useContext, useState } from 'react';
import { store } from '../../App';
import inputWork from '../../utils/keys/helpers/inputWork';

export default function InputField () {
  const [state, dispatch] = useContext(store);

  return (
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
  );
}
