import React from 'react'
import './Hero.css'

import Button from '../Button/Button';

export default function Banner(props) {
  let banner = props.banner;
  return (
    <div className='Banner'>
      <div className="banner_container">
        <div className='text_box' style={{backgroundColor:banner.bg}}>{banner.textBox}</div>
        <h1 className='hero_heading'>{banner.title}</h1>
        <div className='content'>{banner.content}</div>

        {banner.buttonText && <Button buttonText={banner.buttonText} />}
        
      </div>
  
    </div>
  )
}
