// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

const skills = [
  {
    title: "Communication and collaboration",
    para:
      "Open and honest communication is key for effective collaboration. When working with the right people, collaboration is one of the most rewarding aspects of any job. He tangata!",
    icon:
      "solid('coffee')",
  },
  {
    title: "Full-stack development",
    para:
      "Supporting, maintaining, and enhancing software from front-end to back-end is my jam. I solve problems using a wide range of modern and not-so-modern technological familiarities.",
    icon:
      "solid('coffee')",
  },
  {
    title: "Automation and infrastructure",
    para:
      "I love making things easier on everybody with automation. If I can automate a task with Ansible, or a deploy process with Gitlab CI/CD, you best believe that I will!",
    icon:
      "solid('coffee')",
  },
]

const social = [
  {
    img: githubIcon,
    url: "https://github.com/hayleypelham",
    description: "GitHub",
  },
  {
    img: linkedinIcon,
    url: "https://www.linkedin.com/in/hayleypelham/",
    description: "LinkedIn",
  },
]

const Data = {
  skills,
  social,
}

export default Data;
