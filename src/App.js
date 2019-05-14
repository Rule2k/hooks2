import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nombre de clicks : {clicks.toString()}
        </p>
        <button
          onClick={() => 
          setClicks(clicks + 1)
        }>
        Cliquez-moi !
        </button>
      </header>
    </div>
  );
}

export default App;
