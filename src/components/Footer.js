import React from "react"
import Fade from "react-awesome-reveal"

import data from "../data"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade>
            <h2>Contact</h2>
          </Fade>
          <p>Let's make cool things together!</p>
          <a
            href="mailto:hayleypelham@ownmail.net"
            className="primary-btn"
            aria-label="Open a new draft addressed to me in your default email client"
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
                <img src={socialLink.img} alt={socialLink.description}></img>
              </a>
            ))}
          </div>
          <span className="credit">
            Adapted from{" "}
            <a
	            target="_blank"
              href="https://react-portfolio-template.netlify.app/"
              rel="noopener noreferrer"
              aria-label="React portfolio template by Chetan Verma"
            >
            Chetan Verma
            </a>
          {" "}with <span className="icon" role="img" aria-label="Heart">❤</span> by Hayley Pelham
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
