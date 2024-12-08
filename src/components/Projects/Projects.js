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
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectJsonObj.map((p) => (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={p.imgPath}
                isBlog={p.isBlog}
                title={p.title}
                description={p.description}
                appStoreLink={p.appStoreLink}
                playStoreLink={p.playStoreLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );

  function loadProjects() {}
}

export default Projects;
