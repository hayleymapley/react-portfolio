import React from "react"
import Fade from "react-reveal/Fade"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h2>Contact</h2>
            <h3>Let's make cool things together!</h3>
          </Fade>
          <a className="email-link" href="mailto:hayleypelham@ownmail.net">
            hayleypelham@ownmail.net
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
