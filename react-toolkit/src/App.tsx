import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("MAK3", "BLEH BLEH")
  };

  return (
    <div className="App">
      <Sidebar isOpen={isOpen}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={toggleSidebar} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
