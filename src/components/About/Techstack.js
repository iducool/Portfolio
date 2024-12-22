import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { DiNodejs, DiGit } from "react-icons/di";
import { FaApple, FaAws } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
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
        <OverlayTrigger placement="bottom" overlay={<Tooltip>iOS</Tooltip>}>
          <div>
            <FaApple />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Flutter</Tooltip>}>
          <div>
            <SiFlutter />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Android</Tooltip>}>
          <div>
            <SiAndroid />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Node.js</Tooltip>}>
          <div>
            <DiNodejs />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Bluetooth</Tooltip>}
        >
          <div>
            <SiBluetooth />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Git</Tooltip>}>
          <div>
            <DiGit />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>PostgreSQL</Tooltip>}
        >
          <div>
            <SiPostgresql />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="bottom" overlay={<Tooltip>AWS</Tooltip>}>
          <div>
            <FaAws />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Google Cloud</Tooltip>}
        >
          <div>
            <SiGooglecloud />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Codemagic</Tooltip>}
        >
          <div>
            <SiCodemagic />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Firebase</Tooltip>}
        >
          <div>
            <IoLogoFirebase />
          </div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Techstack;
