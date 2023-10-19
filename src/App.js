import React from 'react'
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/HeroSection/Hero';
import {AppName} from './constants.js'
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    document.title = AppName;
  }, []);

  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
    </div>
  )
}

