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
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => ScrollTo({id: "#about"})}>About</button>
            <button onClick={() => ScrollTo({id: "#contact"})}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
