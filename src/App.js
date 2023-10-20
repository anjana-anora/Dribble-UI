import React from 'react'
import './App.css';
import {AppName, banner1, banner2,intro} from './constants.js'
import { useEffect } from 'react';


import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/HeroSection/Hero';
import Marquee from './Components/HeroSection/Marquee';
import LogoGrid from './Components/LogoGrid/LogoGrid';
import Intro from './Components/Intro/Intro';

export default function App() {

  useEffect(() => {
    document.title = AppName;
  }, []);

  return (
    <div className='App'>
      <NavBar/>
      <Banner banner={banner1} />
      <Marquee/>
      <LogoGrid/>
      <Intro data={intro} />
      <Banner banner={banner2} />
    </div>
  )
}

