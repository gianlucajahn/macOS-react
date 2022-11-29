import { combineReducers } from 'redux';
import weatherReducer from "./weather";

const rootReducer = combineReducers({
    weather: weatherReducer,
});

export default rootReducer;