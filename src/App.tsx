import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import WorldDataContextProvider from './contexts/worldCasesContext';

function App() {
  return (
    <WorldDataContextProvider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App container-fluid">
        <HomePage></HomePage>
      </div>
    </WorldDataContextProvider>
  );
}

export default App;
