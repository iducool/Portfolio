import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { IoIosAppstore } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";
import { FaApple, FaAws } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>
          <h4 className="mb-3">{props.title}</h4>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }} className="text-secondary mb-4">
          {props.description}
        </Card.Text>

        <div className="technology">

          <Row className="align-items-center">
          <Col xs="auto" className="mb-3 text-center"><h6 className="purple mb-0">Techs:</h6></Col>
            <Col xs="auto" className="mb-3 text-center">   
              <div className="mb-1">
                <h4 className="mb-0"><FaApple /></h4>
              </div>
            </Col>
          </Row>  

          <Row className="align-items-center">
            <Col xs="auto" className="mb-3 text-center"><h6 className="purple mb-0">Tools:</h6></Col>
            <Col xs="auto" className="mb-3 text-center">   
              <div className="mb-1">
                <h4 className="mb-0"><FaApple /></h4> 
              </div>
            </Col>
          </Row>

        </div>

        <Row>
          <Col xs={12} md="auto" className="mb-3 mb-md-0">        
            {props.appStoreLink && (
              <Button variant="primary" href={props.appStoreLink} target="_blank" className="w-100">
                <IoIosAppstore /> &nbsp; App Store
              </Button>
            )}
          </Col>
          <Col  xs={12} md="auto" className="text-end ms-auto">
            {props.playStoreLink && (
              <Button
                variant="primary"
                href={props.playStoreLink}
                target="_blank" className="w-100">
                <BiLogoPlayStore /> &nbsp;
                {"Play Store"}
              </Button>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
