import React from "react";
import { Col, Row } from "antd";
import ReactIcon from "../../img/icons/react-native-1.svg";
import GatsbyIcon from "../../img/icons/gatsby.svg";
import NativeIcon from "../../img/icons/react-native-1.svg";
// import NextIcon from "../../img/icons/next-js.svg";
import FirebaseIcon from "../../img/icons/firebase-1.svg";
import NodeIcon from "../../img/icons/nodejs.svg";
import GrapqlIcon from "../../img/icons/GraphQL_Logo.svg";
import TaildwindIcon from "../../img/icons/tailwind-css-2.svg";
import JavascriptIcon from "../../img/icons/javascript-1.svg";
import CSSIcon from "../../img/icons/css-3.svg";
import HTMLicon from "../../img/icons/html-1.svg";
import SASSIcon from "../../img/icons/sass-1.svg";
import MaterialIcon from "../../img/icons/material-ui-1.svg";
import BootstrapIcon from "../../img/icons/bootstrap-4.svg";
import MongoIcon from "../../img/icons/mongodb-icon-1.svg";
import ReduxIcon from "../../img/icons/redux.svg";
import MysqlIcon from "../../img/icons/mysql-6.svg";
import "./Skills.css";

const icons = [
  {
    icon: ReactIcon,
  },
  {
    icon: GatsbyIcon,
  },
  {
    icon: NativeIcon,
    w: "10%",
  },

  {
    icon: NodeIcon,
    w: "10%",
  },
  {
    icon: FirebaseIcon,
    w: "6%",
  },

  {
    icon: GrapqlIcon,
  },

  {
    icon: TaildwindIcon,
  },
  {
    icon: JavascriptIcon,
    w: "6%",
  },
  {
    icon: CSSIcon,
    w: "6%",
  },

  {
    icon: HTMLicon,
    w: "6%",
  },

  {
    icon: SASSIcon,
  },

  {
    icon: MaterialIcon,
  },
  {
    icon: BootstrapIcon,
    w: "7%",
  },
  {
    icon: MongoIcon,
  },
  {
    icon: ReduxIcon,
  },

  {
    icon: MysqlIcon,
  },
];

const Skills = ({ scrollSkills }) => {
  return (
    <>
      <h2 className="skills-title">Skills</h2>
      <div className="scrollSkills" ref={scrollSkills}></div>

      <Row>
        <Col span={20} className="icon-container">
          {icons.map((icon) => (
            <img src={icon.icon} alt="" />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Skills;
