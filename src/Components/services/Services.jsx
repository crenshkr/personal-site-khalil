import React from 'react'
import './services.css'
import Cards from './../cards/Cards'
import heartemoji from './../../img/heartemoji.png'
import glasses from './../../img/glasses.png'
import humble from './../../img/humble.png'
/*
// Remove the transition class
const awesome = document.querySelector('.awesome');
awesome.classList.remove('awesome-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      awesome.classList.add('awesome-transition');
      return;
    }

    awesome.classList.remove('awesome-transition');
  });
});



observer.observe(document.querySelector('.services'));

*/
const  Services = () => {
  return (
    <div className='services'>

        {/* left side */}
        <div className='awesome awesome-transition'>
          <span>My Awesome</span>
          <span>services</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas.
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, vitae.
          </span>
          <button className='s-button'>Download CV</button>
          <div className='s-blur' style={{background: 'ABF1FF94'}}> </div>
        </div>
        {/* right side */}
        <div className="cards" style={{borderRadius: "50%"}}>
          <div >
            <Cards
              emoji = { heartemoji } 
              heading = {'Design'} 
              detail = {"Figma, Sketch, Adobe, Adobe xd"}
            />
          </div>
          <div  className="cards" style={{ top: "-1rem", left: "18rem",  borderRadius: "50%"}}>
            <Cards 
              emoji = { glasses } 
              heading = {'Developer'} 
              detail = {"Html, Css, Javascript, React"}
            />
          </div>

          <div  className="cards" style={{ top: "-6rem", left: "0rem",  borderRadius: "50%"}}>
            <Cards 
              emoji = { humble } 
              heading = {'UX/UI'} 
              detail = {"Lorem dummy text to represent something"}
            />
          </div>
            

        </div>
    </div>
  )
}

export default Services