import React from "react";
import { Col, Row } from "antd";

import "./About.css";

const About = ({ scrollAbout }) => {
  return (
    <Row>
      <div className="scrollAbout" ref={scrollAbout}></div>
      <Col span={24} className="about">
        <h2>¡Hola! Mucho gusto.</h2>
        <p>
          Mi nombre es Ricardo, soy un amante por la tecnología y por estar
          aprendiendo constantemente nuevas cosas. Soy 100% autodidacta y llevo
          aproximadamente 3 años como desarrollador web con proyectos propios y
          1 año trabajando profesionalmente para una empresa del sector
          inmobiliario y estoy en busca de seguir desarrollándome como
          desarrollador web.
        </p>
      </Col>
    </Row>
  );
};

export default About;
