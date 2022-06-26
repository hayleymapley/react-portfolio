import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Card = ({ icon, heading, paragraph }) => {
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
