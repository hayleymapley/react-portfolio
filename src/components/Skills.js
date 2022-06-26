import React from "react"
import Card from "./Card"
import Fade from "react-awesome-reveal"

import data from "../data"

const Skills = () => {
  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="skills-wrapper">
          <Fade down cascade>
            <h2>Skills</h2>
          </Fade>
          <div className="grid">
            {data.skills.map((skill, index) => (
              <Card
                key={index}
                heading={skill.title}
                paragraph={skill.para}
                icon={skill.icon}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
