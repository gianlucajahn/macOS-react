import React, { useEffect } from 'react';
import apiKey from "./utils/keys/key";
import './App.css';

function App() {
  useEffect(() => {
    const imgElement = document.querySelector('img');
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`, {
      mode: 'cors'
    }).then(
      function fulfilled(response) {
        return response.json();
      },
      function rejected(err) {
        throw new Error("Could not fetch from the API!");
      }
    ).then(
      function fulfilled(response) {
        imgElement!.src = response.data.images.original.url;
      }
    )
  }, []);

  return (
    <div className="App">
      <img src="#" id="gif" />
    </div>
  );
}

export default App;
