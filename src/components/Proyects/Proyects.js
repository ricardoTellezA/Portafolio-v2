import React from "react";
import { Button, Col, Image, Row, Space } from "antd";
import projects from "../../utils/myProyects";
import "./Proyects.css";
import { GitHub } from "./GitHub";

const Proyects = ({ scrollProyects }) => {
  return (
    <>
      <div className="scrollProyects" ref={scrollProyects}></div>
      <h2 className="projects-title">Mis Proyectos</h2>
      <Row className="projects-container">
        {projects.map((project) => (
          <Col span={6}>
            <Space size={"middle"}>
              <Image
                className="projects-card"
                width={250}
                src={project.image}
                placeholder={
                  <Image preview={false} src={project.image} width={200} />
                }
              />
              <Button
                type="primary"
                onClick={() => {
                  window.open(project.url, "_blank");
                }}
              >
                Ver
              </Button>
            </Space>
          </Col>
        ))}
      </Row>

      <GitHub />
    </>
  );
};

export default Proyects;
