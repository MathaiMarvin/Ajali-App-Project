import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import LandingPageClient from './components/LandingPageClient';
import IncidentForm from './components/IncidentForm';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/landingpageclient' element={<LandingPageClient/>} />
        <Route path='/report' element={<IncidentForm/>} />
      </Routes>
    </div>
  );
}

export default App;
