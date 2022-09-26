import React from 'react'
import './cards.css'

const Cards = ({emoji, heading, detail, dest}) => {
  return ( 
    <div className='card'>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button"><a href={dest} >LEARN MORE</a></button>
    </div>
  )
}
export default Cards