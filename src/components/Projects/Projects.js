import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AI from "../../Assets/Projects/AI.png";
import task from "../../Assets/Projects/task.png";
import Book from "../../Assets/Projects/Book.jpg";

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AI}
              isBlog={false}
              title="AI-Platform"
              description="Developed an AI platform using Next.js and TypeScript, integrating OpenAI and Replicate AI APIs. Generates diverse multimedia content: conversations, code, images, videos, and audio. Seamlessly interacts with OpenAI for text-based content and Replicate AI for music and video creation."
              ghLink="https://github.com/Subhasish1512/AI-Platform"
              // 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task-Master"
              description="Crafted and implemented a Task-Master application utilizing ReactJS and JavaScript. This app facilitates effortless navigation across multiple tasks created by the user. It offers the efficient creation of numerous fields and entries within these fields, enabling seamless task management. This project serves as a valuable tool for organizing and managing tasks effectively."
              ghLink="https://github.com/Subhasish1512/task-master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book}
              isBlog={false}
              title="Bookshop Automation Software"
              description="Developed Book-shop Automation System (BAS) using React for the frontend and MongoDB for the backend. BAS allows customers to check book availability by title or author. It manages stock, displays available copies, and updates inventory upon sales. Generates comprehensive sales statistics and streamlines bookstore operations by automating inventory tracking and procurement."
              ghLink="https://github.com/Subhasish1512/BookShop-Automation-Software" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
