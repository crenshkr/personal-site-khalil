import React from 'react'
import folder from './../../img/foldwhite.png'
import gitw from './../../img/gitwhite.png'
import './ecards.css'


function Ecards() {
  return (
    <div className='ecards'>
        <div className='e-icons'>
            <img className='fold' src={folder} alt=""  style={{transform: "scale(0.1)", left: "5rem"}} />
           
        </div>
        <div className='e-project'>
            <span className='e-title'>Digital Product, Email Marketing template.</span>
            <br/>
            <span className='e-detail'>Email template updates you on new music! A familiar design created with HTML, CSS and Sass. Discover upcoming artists with this responsive layout. </span>
        </div>
        <div className='lingos'>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
            </ul>
        </div>
    </div>
  )
}

export default Ecards