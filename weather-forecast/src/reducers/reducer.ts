import getPosition from "../utils/keys/helpers/getPosition";
import { AnyAction } from "@reduxjs/toolkit";
import apiKey from "../utils/keys/key";
import sampleStore from "../utils/keys/samples/sampleStore";

const reducer = (state = sampleStore, action: AnyAction) => {
  switch(action.type) {
    case 'query/GEO':
      const newLocation = {
        ...state,
        weather: action.payload
      }
      // return updated state
      return newLocation; 
    case 'query/SUBMIT':
      const newLocation2 = {
        ...state,
        weather: action.payload
      }
      // return updated state
      return newLocation2; 
    case 'query/SEARCH':
      const updatedQuery = {
        ...state,
        query: action.payload
      }
      // return updated state
      return updatedQuery; 
    default:
      return state;
  }
}

export default reducer;