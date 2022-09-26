import React from 'react' 
import './intro.css'
import Github from './../../img/githubwhite.png'
import LinkedIn from './../../img/linkedinwhite.png'
import Twitter from './../../img/twitterwhite.png'
import Vector1 from './../../img/Vector1.png'
import Vector2 from './../../img/Vector2.png'
import boy from './../../img/boy.png'
import thumbup from './../../img/thumbup.png'
import crown from './../../img/crown.png'
import FloatingDiv from '../floatingdiv/FloatingDiv'


const Intro = () => {
    return (
        <section className="intro" id='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hi, I am</span>
                    <span>Khalil Crenshaw</span>
                    <span>Front-End Web Developer with three years of self-Learning. Creates
                        <br></br>
                         design-forward UI/UX for clients to easily navigate on any device.
                         <br></br>
                          Remarkable ability in developing multi-page websites with SASS and React.
                          <br></br> 
                          Utilizes CSS Flexbox and Grid to build smooth layouts. Knowledge of deployment in
                          <br></br>
                           Netlify. Generates unique web content with Adobe Creative Suite, such as Photoshop 
                           <br></br> 
                           and Premier Pro. Based in Atlanta, Georgia.
                        
                        
                        </span>
                </div>
                <button  className='i-button'><a href="https://linktr.ee/khalilcrenshawdev" className='abtn'>Hire Me</a></button>
                <div className="i-icons">
                    <a href='https://github.com/crenshkr'><img className='icon' src={Github} alt="" /></a>
                    <a href='https://www.linkedin.com/in/khalil-crenshaw-2887a814a/'><img className='icon' src={LinkedIn} alt="" /></a>
                    <a href='https://twitter.com/devcrenshaw'><img className='icon' src={Twitter} alt="" /></a>
                </div>
            </div>    
            
           
            
        </section>
    )
}

export default Intro