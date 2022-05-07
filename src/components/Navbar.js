import React from "react"
import ScrollTo from "react-scroll-to"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => ScrollTo({id: "#home"})}
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
