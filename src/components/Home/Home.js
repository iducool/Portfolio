import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiOutlineDownCircle
} from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section position-relative z-index-1 overflow-hidden" id="home">
        <Particle />
        <Container className="home-content position-relative z-index-1">
          <Row className="align-items-center h-100">
            <Col md={6} className="py-5">
              <h2 className="mb-2">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h2>
              <h1 className="display-4 fw-bold mb-2">
                I'M
                <span className="main-name"> Idrish Sorathiya</span>
              </h1>

              <h2>
                <Type />
              </h2>
            </Col>

            <Col md={6} className="my-3">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "550px" }}
              />
            </Col>
          </Row>
          <a href="#about" className="h1 purple mb-0 position-absolute bottom-0 start-50 translate-middle">
          <AiOutlineDownCircle /> 
          </a>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
