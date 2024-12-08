import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNodejs, DiGit } from "react-icons/di";
import { FaApple, FaAws } from "react-icons/fa";
import {
  SiFirebase,
  SiPostgresql,
  SiFlutter,
  SiAndroid,
  SiBluetooth,
  SiGooglecloud,
  SiCodemagic,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaApple title="iOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBluetooth />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodemagic title="Codemagic" />
      </Col>
    </Row>
  );
}

export default Techstack;
