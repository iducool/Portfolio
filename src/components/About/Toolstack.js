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
    <Row>
     <Col xs={6} sm={3} md={2} className="mb-4">
        <div className="tech-icons">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>MacOS</Tooltip>}>
            <div>
              <SiMacos />
            </div>
          </OverlayTrigger>
        </div>
      </Col>
      <Col xs={6} sm={3} md={2} className="mb-4">
        <div className="tech-icons">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>Xcode</Tooltip>}>
            <div>
              <SiXcode />
            </div>
          </OverlayTrigger>
        </div>
      </Col>
      <Col xs={6} sm={3} md={2} className="mb-4">
        <div className="tech-icons">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>Visual Studio Code</Tooltip>}>
            <div>
              <BiLogoVisualStudio />
            </div>
          </OverlayTrigger>
        </div>
      </Col>
      <Col xs={6} sm={3} md={2} className="mb-4">
        <div className="tech-icons">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>Android Studio</Tooltip>}>
            <div>
                <SiAndroidstudio />
            </div>
          </OverlayTrigger>
        </div>
      </Col>
      <Col xs={6} sm={3} md={2} className="mb-4">
        <div className="tech-icons">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>SourceTree</Tooltip>}>
            <div>
              <SiSourcetree />
            </div>
          </OverlayTrigger>
        </div>
      </Col>
      <Col xs={6} sm={3} md={2} className="mb-4">
        <div className="tech-icons">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>Postman</Tooltip>}>
            <div>
              <SiPostman />
            </div>
          </OverlayTrigger>
        </div>
      </Col>
      <Col xs={6} sm={3} md={2} className="mb-4">
        <div className="tech-icons">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>Charles</Tooltip>}>
              <SiCharles />
          </OverlayTrigger>
        </div>
      </Col>
      <Col xs={6} sm={3} md={2} className="mb-4">
        <div className="tech-icons">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>GitHub Copilot and Cursor AI</Tooltip>}>
              <GoCopilot />
          </OverlayTrigger>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
