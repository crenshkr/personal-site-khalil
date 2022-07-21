import React from 'react' 

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Khalil</div>
                <span>Toggle</span>
            </div>
            <div className="n-right">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                </ul>
                <button className="n-button">
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default Navbar