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
    <section className='exp' id='exp'>
        <div className='econtainer'>
            <div className='eabout'>
                <span >Projects</span>
                <span>Freelance Web Developer based in Atlanta, Georgia.</span>
                <span>Experienced in developing and designing custom websites.</span>
                <div className='e-bio'>
                    <Ecards
                      title = {'Music Streaming - Email Marketing template.'}
                      detail = {'Email template updates you on new music! Discover upcoming artists with this responsive layout.'}
                      dest = {'https://applemusic-email.netlify.app/'}/>
                    <Ecards
                      title = {'Restaraunt Rewards - Email Marketing template.'}
                      detail = {'Claim your rewards, and order a bite with this template. Works on all devices, so dinner is a tap away.'}
                      dest = {'https://chipotle-email.netlify.app'}/>
                    <Ecards
                      title = {'Credit Card Provider - Email Marketing template.'}
                      detail = {'Template welcoming you to become a new cardholder. Learn more here, and become an authorized user.'}
                      dest = {'https://visa-email.netlify.app/'}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Exp