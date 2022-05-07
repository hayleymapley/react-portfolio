import React from "react"
import Fade from "react-reveal/Fade"

import data from "../data"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h2>Contact</h2>
            <p>Let's make cool things together!</p>
          </Fade>
          <a
            href="mailto:hayleypelham@ownmail.net"
            className="primary-btn"
          >
            GET IN TOUCH
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            Adapted from{" "}
            <a
	            target="_blank" 
              href="https://react-portfolio-template.netlify.app/"
              rel="noopener noreferrer"
            >
            Chetan Verma
            </a>
          {" "}with <span className="icon">❤</span> by Hayley Pelham
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
