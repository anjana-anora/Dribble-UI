import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <a href="dribble.com" className="button">{props.buttonText}</a>
  )
}
