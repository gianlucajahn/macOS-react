// Imports
import './App.scss';
import React, { createContext, useReducer } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import reducer from './reducers/reducer';
import sampleStore from './utils/keys/samples/sampleStore';
import WeatherBoard from './components/WeatherBoard/WeatherBoard';
import QueryBoard from './components/QueryBoard/QueryBoard';
import Draggable from 'react-draggable';

// Create store (redux naming convention)
export const store = createContext<any>(null);

// Create store provider to wrap subcomponents in
const StoreProvider = ({ children }: any) => (
  <store.Provider value={useReducer(reducer, sampleStore)}>
    {children}
  </store.Provider>
)

function App() {
  return (
    <ChakraProvider >
      <StoreProvider>
        <div className="page" id="page">
          <Draggable handle="#handle" onStart={(e: any) => { 
            if (e.target.id !== "handle") { 
              return false 
            } 
          }}>
            <div className="window">
              <QueryBoard />
              <WeatherBoard />
            </div>
          </Draggable>
        </div>
      </StoreProvider>
    </ChakraProvider>
  );
}

export default App;
