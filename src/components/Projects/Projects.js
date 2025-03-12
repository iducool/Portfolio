import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import projectJsonObj from "../../Assets/projects.json";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <Container fluid className="py-5 overflow-hidden">
      <Particle />
      <Container className="position-relative z-index-1">
      <h2 className="mt-5 mb-1">My Projects</h2>
      <h1 className="fw-bold mb-4 mb-lg-5">Successfully <span className="purple">Completed Work</span></h1>
       
        <Row className="">
          {projectJsonObj.map((p) => (
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div className="project-card">
                <ProjectCard
                  imgPath={p.imgPath}
                  isBlog={p.isBlog}
                  title={p.title}
                  description={p.description}
                  appStoreLink={p.appStoreLink}
                  playStoreLink={p.playStoreLink}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );

  function loadProjects() {}
}

export default Projects;
