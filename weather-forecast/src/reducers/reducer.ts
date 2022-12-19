import getPosition from "../utils/helpers/getPosition";
import { AnyAction } from "@reduxjs/toolkit";
import apiKey from "../utils/keys/key";
import sampleStore from "../utils/keys/samples/sampleStore";
import getDate from "../utils/helpers/getDate";

const reducer = (state = sampleStore, action: AnyAction) => {
  switch(action.type) {
    case 'query/GEO':
      const newLocation = {
        ...state,
        weather: action.payload,
        loading: false
      }
      // return updated state
      return newLocation; 
    case 'query/SUBMIT':
      const newSubmission = {
        ...state,
        weather: action.payload,
        selected: undefined,
        loading: false
      }
      // return updated state
      return newSubmission; 
    case 'query/FAIL':
      const failedSubmission = {
        ...state,
        loading: false,
        failed: true
      };
      return failedSubmission;
    case 'query/SEARCH':
      const updatedQuery = {
        ...state,
        query: action.payload
      }
      // return updated state
      return updatedQuery; 
    case 'loading/START':
      const toggledLoading = {
        ...state,
        loading: true
      };
      return toggledLoading;
    case 'section/SELECT':
      const updatedSection = {
        ...state,
        section: action.payload
      };
      // return updated state
      return updatedSection;
    case 'section/RESET':
      const checkedSection = {
        ...state,
        section: "none"
      };
      return checkedSection;
    case 'select/SELECT':
      const id = parseInt(action.payload);
      const day = state.weather.forecast[id];
      const selectedDay = {
        ...state,
        selected: day
      }
      console.log(selectedDay);
      return selectedDay;
    case 'dock/SELECT':
      const selectedDockItem = {
        ...state,
        dockItem: action.payload
      };
      return selectedDockItem;
    case 'dock/RESET':
      const resetDockItems = {
        ...state,
        dockItem: undefined
      };
      return resetDockItems;
    case 'date/SET':
      const date = getDate();
      const updatedDate = {
        ...state,
        date: date
      };
      return updatedDate;
    case 'booting/FINISH':
      const finishedBooting = {
        ...state,
        booting: false
      };
      return finishedBooting;
    case 'sound/PLAY':
      const soundPlay = {
        ...state,
        soundPlayed: true
      };
      return soundPlay;
    default:
      return state;
  }
}

export default reducer;