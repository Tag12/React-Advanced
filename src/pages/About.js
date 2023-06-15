import React from 'react'
import AboutPic from "../images/lett.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${AboutPic})` }}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
          Arthmate is India's premier embedded fintech platform leveraging technology to provide on-demand seamless deployment of credit across fintechs, digital platforms and SME anchors. With our at-scale credit exchange platform, we strive to transform digital lending through proprietary tech and advanced analytics solutions.
        </p>
      </div>
    </div>
  )
}

export default About;
