import React from "react";
import { Col, Row } from "antd";
import Yo from "../../img/yo.jpg";
import "./Presentation.css";

const Presentation = ({ scrollAbout }) => {
  return (
    <Row className="container">
      <Col span={24}>
        <h1 className="title">¡HOLA! MI NOMBRE ES RICARDO TELLEZ ALVAREZ</h1>
        <div className="ocupation">
          <p>Soy Desarrollador Front-end</p>
          <img src={Yo} alt="" />
        </div>
     
      </Col>
    </Row>
  );
};

export default Presentation;
