import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Example from './components/Example/Example';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Sidebar/>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<HelloWorld />} />
            <Route path="/example" element={<Example />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
