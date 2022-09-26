import React from "react";
import "./services.css";
import Cards from "./../cards/Cards";
import heartemoji from "./../../img/heartemoji.png";
import glasses from "./../../img/glasses.png";
import humble from "./../../img/humble.png";
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
const Services = () => {
  return (
    <section className="services" id="services">
      {/* left side */}
      <div className="s-container">
        <div className="awesome awesome-transition">
          <span>My Technical</span>
          <span>skills</span>
          <span>
            Creating user experiences with various tools, with
            <br />
            over 5 years specializing in design. Responsive templates, coupled
            <br />
            with the most popular digital editing software. 
          </span>
          <a href="https://drive.google.com/file/d/1SSxgGyx6KNmPZRvH3IwmmEw7EAQdHYOC/view?usp=sharing"><button className="s-button">Download Resume</button></a>
          <div className="s-blur" style={{ background: "ABF1FF94" }}>
            {" "}
          </div>
        </div>
        {/* right side */}
        <div className="cards" id="card1" style={{ borderRadius: "50%" }}>
          <div>
            <Cards
              emoji={heartemoji}
              heading={"Design"}
              detail={"Photoshop, Premier Pro, Illustrator"}
              dest= {'https://www.adobe.com/creativecloud/business/teams.html?sdid=B16P3W9X&mv=search&ef_id=a200f3672bcd17b61f4d904f93d1e5aa:G:s&s_kwcid=AL!3085!10!78890133878883!78890478898373&msclkid=a200f3672bcd17b61f4d904f93d1e5aa'}
            />
          </div>
          <div className="cards" id="card2" style={{ borderRadius: "50%" }}>
            <Cards
              emoji={glasses}
              heading={"UX/UI"}
              detail={"Html, Css, Javascript, React"}
              dest= {'https://reactjs.org/'}
            />
          </div>

          <div className="cards" id="card3" style={{ borderRadius: "50%" }}>
            <Cards
              emoji={humble}
              heading={"Developer"}
              detail={"Git, Git-hub, Node, Sass"}
              dest= {'https://nodejs.org/en/about/'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
