import React from 'react'
import './Intro.css'
import Button from '../Button/Button'

export default function Intro(props) {
    let intro = props.data;
  return (
    <div className='intro_container'>
        
      <div className="intro_part1">
        <h1 className='intro_title'>{intro.title}</h1>
      </div>

      <div className="intro_part2">
        <p className='intro_content'>{intro.content}</p>
        <Button buttonText={intro.buttonText} />
        </div>

    </div>
  )
}
