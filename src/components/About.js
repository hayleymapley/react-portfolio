import React from "react"
import Fade from "react-reveal/Fade"

const About = () =>{
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              One paragraph
              <br></br>
              <br></br>
              One paragraph
              <br></br>
              <br></br>
              One paragraph
            </p>
          </div>
          <div className="image-wrapper">
            <img src="https://avatars.githubusercontent.com/u/40159686?v=4" alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
