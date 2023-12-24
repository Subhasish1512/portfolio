import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contactcard from "./Contactcards";
import Particle from "../Particle";
import phone from "../../Assets/Projects/phone.png";
import web from "../../Assets/Projects/web.png";
import mail from "../../Assets/Projects/mail.jpg";

function Contacts() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Contact Me
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Contactcard
                imgPath={phone}
                title="Contact Number"
                description="+91 8260867332"
                href=""
            />
          </Col>

          <Col md={4} className="project-card">
            <Contactcard
              imgPath={mail}
              title="Email"
              description="subhasishnayak1512@gmail.com"
              href="mailto:subhasishnayak1512@gmail.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <Contactcard
              imgPath={web}
              title="Web Site"
              description="https://github.com/subhasish1512.github.io/portfolio/"
              href="https://github.com/subhasish1512.github.io/portfolio/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contacts;
