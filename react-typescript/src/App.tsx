import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Game } from './game/Game'
import { MouseTracker } from "./mouse/2";


function App() {
  return (
    <div className="App">
      <Game />
      <MouseTracker />
    </div>
  );
}

export default App;
