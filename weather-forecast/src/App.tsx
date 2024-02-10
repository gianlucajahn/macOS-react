// Imports
import "./App.scss";
import React, { createContext, useReducer, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import reducer from "./reducers/reducer";
// import sampleStore from "./utils/keys/samples/sampleStore";
// import QueryBoard from "./components/QueryBoard/QueryBoard";
import Draggable from "react-draggable";
import NavBar from "./components/NavBar/NavBar";
import Page from "./components/Page/Page";
import Dock from "./components/Dock/Dock";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import BootSound from "./resources/audio/bootsound.mp3";
import WallpaperMenu from "./components/WallpaperMenu/WallpaperMenu";
import wallpapers from "./utils/helpers/wallpapers";
import Folder from "./components/Folder"

// Create store (redux naming convention)
export const store = createContext<any>(null);

const initialState = {
  weather: {},
  settings: {
    wallpaper: {},

    notch: {},
    animations: {},
    airdrop: {},
  },
};

// Create store provider to wrap subcomponents in
const StoreProvider = ({ children }: any) => (
  // <store.Provider value={useReducer(reducer, sampleStore)}>
  <store.Provider value={useReducer(reducer, initialState)}>
    {children}
  </store.Provider>
);

function App() {
  return (
    <ChakraProvider>
      <StoreProvider>
        <Page>
          <NavBar />
          <Folder name="test"></Folder>
          <Draggable
            handle="#handle"
            onStart={(e: any) => {
              if (e.target.id !== "handle") {
                return false;
              }
            }}
          >
            <div className={`window weather-window`} id="weather-window">
              {/* <QueryBoard /> */}
     
            </div>
          </Draggable>

          {/* <WallpaperMenu /> */}

          <ContextMenu />

          <Dock />
        </Page>
      </StoreProvider>
    </ChakraProvider>
  );
}

export default App;
