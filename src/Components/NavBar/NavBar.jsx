import React from 'react'
import './NavBar.css'
import { AppName } from '../../constants';
// import logo from '../../assets/dribble.png';

export default function NavBar() {
    let navTab = ['Find Talent', 'Inspiration','Learn Designs', 'Job','Go Pro'];
    let navUrl = ['https://dribbble.com/hiring',
        'https://dribbble.com/shots/popular',
        'https://dribbble.com/learn',
        'https://dribbble.com/jobs',
        'https://dribbble.com/hiring'];

  return (
    <div className='NavBar'>
        <div className="menu">
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
        <div className="opt_container">
            {navTab.map((obj,index)=>{
                return (
                    <a key={index} href={navUrl[index]} className='nav_tab'>{obj}</a>
                );
            })}
            
        </div>
        {/* <img className='logo' src={logo} alt="dribble logo" /> */}
        <h2 className='logo'>{AppName}</h2>
        <div className='login_container'>
            <button className='login'>Log In</button>
            <p className='dot'>.</p>
            <button className='signup'>Sign Up</button>
        </div>
      
    </div>
  )
}
