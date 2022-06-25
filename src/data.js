// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

const skills = [
  {
    title: "Communication and collaboration",
    para:
      "Open and honest communication is key for effective collaboration. I believe that when working with the right people, collaboration is one of the most rewarding aspects of any job. I pride myself on a strong eye for detail, which means that written communication and documentation is one of my strong suits.",
  },
  {
    title: "Full-stack development",
    para:
      "Supporting, maintaining, and enhancing software is my jam, and I have a wide range of modern and not-so-modern technological familiarities. The front-end essentials are my bread-and-(plant-based)-butter, and I have strong skills with a modified LAMP stack in the back-end to balance it out. I'm also pretty comfortable with MVC front-end frameworks.",
  },
  {
    title: "Automation and infrastructure",
    para:
      "I love making things easier on everybody with automation, and am experienced in automating processes with Ansible, Gitlab CI/CD, and the more basic cronjobs and bash/Python scripts. I'm used to managing cloud infrastructure using both web interfaces and APIs, and have also dabbled with some operations work, managing monitoring.",
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
