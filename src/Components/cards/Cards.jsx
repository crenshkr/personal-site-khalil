import React from 'react'
import './cards.css'

const Cards = ({emoji, heading, detail}) => {
  return ( 
    <div className='card'>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}
export default Cards