import React from 'react'
import folder from './../../img/foldwhite.png'
import gitw from './../../img/gitwhite.png'
import './ecards.css'


function Ecards({ title, detail, dest, siteImage}) {
  return (
        <div className='ecards'>
            <div className='e-icons'>
                <a href={ dest }><img className='fold' src={folder} alt=""  style={{transform: "scale(0.1)", left: "5rem"}} /></a>
           
            </div>
            <div className='e-project'>
                <span className='e-title'><a href={ dest } className='e-link'> { title } </a></span>
                <br/>
                <span className='e-detail'> { detail } </span>
            </div>
            <div className='lingos'>
                <ul className='e-list'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                </ul>
            </div>
        </div>
  )
}

export default Ecards