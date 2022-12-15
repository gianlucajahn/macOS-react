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
        weather: action.payload
      }
      // return updated state
      return newLocation; 
    case 'query/SUBMIT':
      const newSubmission = {
        ...state,
        weather: action.payload
      }
      // return updated state
      console.log(newSubmission);
      return newSubmission; 
    case 'query/SEARCH':
      const updatedQuery = {
        ...state,
        query: action.payload
      }
      // return updated state
      return updatedQuery; 
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
    default:
      return state;
  }
}

export default reducer;