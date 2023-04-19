import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
