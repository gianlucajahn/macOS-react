import getPosition from "../utils/helpers/getPosition";
import { AnyAction } from "@reduxjs/toolkit";
import apiKey from "../utils/keys/key";
import sampleStore from "../utils/keys/samples/sampleStore";
import getDate from "../utils/helpers/getDate";

const reducer = (state = sampleStore, action: AnyAction) => {
  switch (action.type) {
    case "query/GEO":
      const newLocation = {
        ...state,
        weather: action.payload,
        loading: false,
      };
      // return updated state
      return newLocation;
    case "query/SUBMIT":
      const newSubmission = {
        ...state,
        weather: action.payload,
        selected: undefined,
        loading: false,
      };
      // return updated state
      return newSubmission;
    case "query/FAIL":
      const failedSubmission = {
        ...state,
        loading: false,
        failed: true,
      };
      return failedSubmission;
    case "query/SEARCH":
      const updatedQuery = {
        ...state,
        query: action.payload,
      };
      // return updated state
      return updatedQuery;
    case "loading/START":
      const toggledLoading = {
        ...state,
        loading: true,
      };
      return toggledLoading;
    case "section/SELECT":
      const updatedSection = {
        ...state,
        section: action.payload,
      };
      // return updated state
      return updatedSection;
    case "section/RESET":
      const checkedSection = {
        ...state,
        section: "none",
      };
      return checkedSection;
    case "select/SELECT":
      const id = parseInt(action.payload);
      const day = state.weather.forecast[id];
      const selectedDay = {
        ...state,
        selected: day,
      };
      console.log(selectedDay);
      return selectedDay;
    case "dock/SELECT":
      const selectedDockItem = {
        ...state,
        dockItem: action.payload,
      };
      return selectedDockItem;
    case "dock/RESET":
      const resetDockItems = {
        ...state,
        dockItem: undefined,
      };
      return resetDockItems;
    case "date/SET":
      const date = getDate();
      const updatedDate = {
        ...state,
        date: date,
      };
      return updatedDate;
    case "booting/FINISH":
      const finishedBooting = {
        ...state,
        booting: false,
      };
      return finishedBooting;
    case "sound/PLAY":
      const soundPlay = {
        ...state,
        soundPlayed: true,
      };
      return soundPlay;
    case "settings/CLOSE":
      const closedSettings = {
        ...state,
        settings: {
          ...state.settings,
          open: false,
        },
      };
      return closedSettings;
    case "settings/OPEN":
      const openedSettings = {
        ...state,
        settings: {
          ...state.settings,
          open: true,
        },
      };
      return openedSettings;
    case "settings/SETCOLOR":
      const setColor = {
        ...state,
        settings: {
          ...state.settings,
          color: action.payload,
        },
      };
      return setColor;
    case "settings/AIRDROP":
      const toggledAirdrop = {
        ...state,
        settings: {
          ...state.settings,
          airdrop: !state.settings.airdrop,
        },
      };
      return toggledAirdrop;
    case "settings/ANIMATIONS":
      const toggledAnimations = {
        ...state,
        settings: {
          ...state.settings,
          animations: !state.settings.animations,
        },
      };
      return toggledAnimations;
    case "settings/NOTCH":
      const toggledNotch = {
        ...state,
        settings: {
          ...state.settings,
          notch: !state.settings.notch,
        },
      };
      return toggledNotch;
    case "wallpaper/TOGGLE":
      const toggledWallpaperWindow = {
        ...state,
        settings: {
          ...state.settings,
          wallpaper: {
            ...state.settings.wallpaper,
            open: true,
          },
        },
      };
      return toggledWallpaperWindow;
    case "wallpaper/CHANGE":
      const changedWallpaper = {
        ...state,
        settings: {
          ...state.settings,
          wallpaper: {
            open: true,
            preview: action.payload.preview,
            src: action.payload.src,
            name: action.payload.name,
            surname: action.payload.surname,
          },
        },
      };
      return changedWallpaper;
    case "onTop/SET":
      const changedIndices = {
        ...state,
        onTop: action.payload,
      };
      return changedIndices;
    case "state/LOCAL":
      const localWallpaper = {
        ...state,
        settings: {
          ...state.settings,
          wallpaper: action.payload,
        },
      };
      return localWallpaper;
    case "state/LOCALCOLOR":
      const localColor = {
        ...state,
        settings: {
          ...state.settings,
          color: action.payload,
        },
      };
      return localColor;
    case "state/BOOT":
      const afterBoot = {
        ...state,
        booting: action.payload,
      };
      return afterBoot;
    default:
      return state;
  }
};

export default reducer;
