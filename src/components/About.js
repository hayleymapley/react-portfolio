import React from "react"
import Fade from "react-reveal/Fade"

const About = () =>{
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h2>About</h2>
            </Fade>
            <p>
              Currently, I work as a developer and infrastructure lead for an{" "}
              <a href="https://www.catalyst.net.nz/about-us">open-source software
              solutions company</a>.
              <br></br>
              <br></br>
              I like creating beautiful websites and making processes more efficient
              with automation &mdash; and get to combine both of these pursuits every day
              in my work doing web development and operations.
              <br></br>
              <br></br>
              One paragraph
            </p>
          </div>
          <div className="image-wrapper">
            <img src="https://avatars.githubusercontent.com/u/40159686?v=4"
              alt="Hayley smiling wearing a black blazer"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
