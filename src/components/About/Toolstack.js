import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiXcode,
  SiSourcetree,
  SiCharles,
  SiAndroidstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoVisualStudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSourcetree />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCharles />
      </Col>
    </Row>
  );
}

export default Toolstack;
