import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import spotify from "../../Assets/Projects/spotify.jpg";
import port from "../../Assets/Projects/port.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify"
              description="fully functional music streaming web app built using HTML, CSS, and JavaScript. Features include music playback controls, playlist management, and a responsive UI, providing a seamless user experience."
              ghLink="https://github.com/SHAIKHAMAN1/Spotify-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio Website"
              description="A modern and interactive portfolio built with Next.js, featuring smooth animations, a responsive design, and project showcases to highlight my skills and achievements."
              
            />
          </Col>

                  </Row>
      </Container>
    </Container>
  );
}

export default Projects;
