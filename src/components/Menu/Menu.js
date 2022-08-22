import React from "react";
import { Col, Row } from "antd";

import "./Menu.css";
import Nav from "./Nav";

const Menu = ({ scrollToElement, scrollToElementProjects, scrollElementSkills }) => {
  return (
    <Row>
      <Col span={12}>
        <h2 className="logo">RT</h2>
      </Col>
      <Col span={12}>
        <Nav
          scrollToElement={scrollToElement}
          scrollToElementProjects={scrollToElementProjects}
          scrollElementSkills={scrollElementSkills}
        />
      </Col>
    </Row>
  );
};

export default Menu;
