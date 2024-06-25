// src/App.jsx
import React from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import './App.css';

function App() {
  return (
    <div id="app">
      <Header />
      <div className="text-container">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
