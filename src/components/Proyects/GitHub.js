import React from "react";
import { Col, Row } from "antd";
import "./Proyects.css";
import { GithubOutlined } from "@ant-design/icons";

export const GitHub = () => {
  return (
    <Row>
      <Col span={24} className="container-git">
        <h2>¡Si quieres conocer más proyectos míos, Visita mi GitHub!</h2>
        <GithubOutlined
          className="icon-git"
          onClick={() =>
            window.open(
              "https://github.com/ricardoTellezA?tab=repositories",
              "_blank"
            )
          }
        />
      </Col>
    </Row>
  );
};
