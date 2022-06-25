import React from "react"

const Card = ({ heading, paragraph }) => {
  return (
    <div
      className="card"
    >
      <div className="content">
        <h3 className="header">{heading}</h3>
        <p className="text">{paragraph}</p>
      </div>
    </div>
  )
}

export default Card
