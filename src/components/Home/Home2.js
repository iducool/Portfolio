import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={7} >
            <h1 className="mb-4">
              Let me <span className="purple"> introduce </span> myself
            </h1>
            <p className="lead">
              I discovered my passion for creating impactful solutions through
              technology and have built a strong foundation in mobile and
              backend development. 🤷‍♂️
              <br />
              <br />I specialize in building mobile applications using
              
                <b className="purple">
                  {" "}
                  Flutter, MAUI, Xamarin, and Native iOS, with a focus on BLE
                  hardware integration.{" "}
                </b>
              </p>
              <p className="lead">
              My interests lie in <b className="purple">creating innovative mobile solutions </b>{" "}
                that seamlessly integrate hardware and software, as well as
                exploring scalable backend systems with Node.js, Fastify,
                Express, and PostgreSQL.
                </p>
              <p className="lead">
              Whenever possible, I enjoy contributing to open-source projects
              and crafting intuitive user experiences through modern
              technologies
            </p>
            <br/>

            <h2>Find me on</h2>
            <p className="mb-3">Feel free to <span className="purple">connect </span>with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/iducool"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/idrish-sorathiya-02295323"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://stackoverflow.com/users/634704/iducool"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaStackOverflow />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={5} className="text-center">
            <Tilt className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
