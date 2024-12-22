import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BiLogoVisualStudio } from "react-icons/bi";
import { GoCopilot } from "react-icons/go";
import {
  SiPostman,
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
        <OverlayTrigger placement="bottom" overlay={<Tooltip>MacOS</Tooltip>}>
          <div>
            <SiMacos />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Xcode</Tooltip>}>
          <div>
            <SiXcode />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Visual Studio Code</Tooltip>}
        >
          <div>
            <BiLogoVisualStudio />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Android Studio</Tooltip>}
        >
          <div>
            <SiAndroidstudio />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>SourceTree</Tooltip>}
        >
          <div>
            <SiSourcetree />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Postman</Tooltip>}>
          <div>
            <SiPostman />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Charles</Tooltip>}>
          <div>
            <SiCharles />
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>GitHub Copilot and Cursor AI</Tooltip>}
        >
          <div>
            <GoCopilot />
          </div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
