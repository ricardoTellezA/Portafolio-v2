import React from "react";
import "./Menu.css";
const Nav = ({ scrollToElement, scrollToElementProjects, scrollElementSkills }) => {
  return (
    <ul className="nav">
      <li onClick={scrollToElement}>Sobre mi</li>
      <li onClick={scrollToElementProjects}>Portafolio</li>
      <li onClick={scrollElementSkills}>Skills</li>
      <li>Experiencia laboral</li>
    </ul>
  );
};

export default Nav;
