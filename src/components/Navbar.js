import React from "react"
import ScrollTo from "react-scroll-to"
import Scroll from "react-scroll"

var Element = Scroll.Element;
var scroller = Scroll.scroller;

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={scroller.scrollTo('about', {
              duration: 1500,
              delay: 100,
              smooth: true,
              containerId: 'about',
              offset: 50, // Scrolls to element + 50 pixels down the page
            })}
            className="name"
            tabIndex={0}
          >
            Hayley Pelham.
          </div>
          <div className="links-wrapper">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
