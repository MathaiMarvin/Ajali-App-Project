import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import LandingPageAdmin from './components/LangingPageAdmin';
import LandingPageClient from './components/LandingPageClient';


function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/signup' element={<Signup/>} />
        <Route path='/admin'element ={<LandingPageAdmin/>}/>
        <Route path='/landingpageclient' element={<LandingPageClient/>} />
      </Routes>
    </div>
  );
}

export default App;
