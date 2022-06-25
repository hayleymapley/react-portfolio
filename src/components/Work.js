import React from "react"
import Card from "./Card"
import Fade from "react-reveal/Fade"

import data from "../data"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom cascade>
            <h2>Skills</h2>
          </Fade>
          <div className="grid">
            {data.skills.map((skill, index) => (
              <Card
                key={index}
                heading={skill.title}
                paragraph={skill.para}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
