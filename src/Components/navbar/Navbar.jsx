import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      {/*<div className="n-left" id='l-div'>
                <div className="n-name" id='l-content'>Khalil</div>
                
            </div> */}
      <div className="n-right">
        <ul className="nav-list">
          <li className="nav-styles">
            <Link to='#intro' smooth className="link">
                About
            </Link>
          </li>
          <li className="nav-styles">
            <Link to='#exp' smooth className="link">
                Portfolio
            </Link>    
          </li>
          <li className="nav-styles">
            <Link to='#services' smooth className="link">
                Skills   
            </Link>
          </li>
        </ul>
        {/*<button  className="n-button" id='n-btn'><a href="https://linktr.ee/khalilcrenshawdev" className='abtn'>
                    Contact
                </a></button>*/}
      </div>
    </div>
  );
};

export default Navbar;
