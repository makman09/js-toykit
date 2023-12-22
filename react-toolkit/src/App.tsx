import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import HelloWorld from './components/HelloWorld/HelloWorld';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HelloWorld />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
