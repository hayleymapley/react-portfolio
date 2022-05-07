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
            <h2>Work</h2>
          </Fade>

          <div className="grid">
            {data.projects.map((project, index) => (
              <Card
                key={index}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
