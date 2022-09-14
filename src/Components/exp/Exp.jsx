import React from 'react'
import './exp.css'
import Ecards from './../ecards/Ecards'
/*
// Remove the transition class
const eabout = document.querySelector('.eabout');
eabout.classList.remove('eabout-transition');

// Create the observer, same as before:
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      eabout.classList.add('eabout-transition');
      return;
    }

    eabout.classList.remove('eabout-transition');
  });
});



observer2.observe(document.querySelector('.exp'));

*/
const Exp = () => {
  return (
    <div className='exp'>
        <div className='econtainer'>
            <div className='eabout'>
                <span >Projects</span>
                <span>Freelance Web Developer based in Atlanta, Georgia.</span>
                <span>Experienced in developing and designing custom websites.</span>
                <div className='e-bio'>
                    <Ecards/>
                    <Ecards/>
                    <Ecards/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Exp