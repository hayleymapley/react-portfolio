import React from "react"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
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
