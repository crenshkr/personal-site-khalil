import React from 'react' 
import './intro.css'
import Github from './../../img/github.png'
import LinkedIn from './../../img/linkedin.png'
import Instagram from './../../img/instagram.png'
import Vector1 from './../../img/Vector1.png'
import Vector2 from './../../img/Vector2.png'
import boy from './../../img/boy.png'
import thumbup from './../../img/thumbup.png'
import crown from './../../img/crown.png'
import FloatingDiv from '../floatingdiv/FloatingDiv'


const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi, I am</span>
                    <span>Khalil Crenshaw</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ea, magni, rerum velit maiores necessitatibus aut eum consequatur perferendis incidunt ex molestias rem recusandae itaque! Nobis rerum a beatae eum. Dolores provident blanditiis laborum mollitia ea recusandae aspernatur nesciunt officia veritatis laboriosam voluptatum velit sit sed harum explicabo, doloribus veniam.</span>
                </div>
                <button className='i-button'>Hire Me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>    
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <div style={{top: '4%', left: '58%' }}>
                    <FloatingDiv image={crown} txt1="Web" txt2="Developer"/>
                </div>
                <div style={{top: '25.6rem', left: '-2rem' }}>
                    <FloatingDiv image={thumbup} txt1="Best Code" txt2="Award"/>
                </div>
                <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
                <div className='blur' style={{ 
                    background: "rgb(238 210 255)",
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                    
                    }}></div>
            </div>
            
        </div>
    )
}

export default Intro