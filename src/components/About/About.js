import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <section>
      <Container fluid className="position-relative overflow-hidden">
        <Particle />
        <Container className="position-relative z-index-1 py-5">
          <h2 className="mt-5 mb-1">About me</h2>
          <h1 className="fw-bold mb-4 mb-lg-5">Know Who <span className="purple">I'M</span></h1>

          <Row style={{ alignItems:"center", justifyContent: "center" }}>
            <Col md={7} className="mb-4 mb-lg-5">
              <Aboutcard />
            </Col>
            <Col md={5} className="about-img my-3 my-lg-4">
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
        </Container>     
        </Container>  
        <Container fluid className="position-relative overflow-hidden bg-white py-5 border-top">
          <Container className="position-relative z-index-1">
            <h2 className="mb-4">Professional <span className="purple">Skillset </span></h2>
            <Techstack />
            <br/>
            <h2 className="mb-4"><span className="purple">Tools</span> I use</h2>
            <Toolstack />
          </Container>
      </Container>
      </section>
  );
}

export default About;
