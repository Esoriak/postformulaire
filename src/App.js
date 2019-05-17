import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormEmployee from './FormEmployee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormEmployee />
      </header>
    </div>
  );
}

export default App;
