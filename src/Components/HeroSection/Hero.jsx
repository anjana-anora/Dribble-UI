import React from 'react'
import './Hero.css'
import Marquee from './Marquee'

export default function Banner() {
  return (
    <div className='Banner'>
      <div className="home_container">
        <div className='textline1'>Over 3 million ready-to-work creatives in our community!</div>
        <h1 className='hero_heading'>Hire the world’s top <br/>creative talent.</h1>
        <div className='connect'>Connect with a community of millions of top-rated designers & agencies around the world.</div>
        <a href="dribble.com" className="hire_button">Start hiring today</a>
      </div>
      <Marquee/>
    </div>
  )
}
