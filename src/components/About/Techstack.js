import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiAws,
  DiBootstrap,
  DiDatabase,
  DiGit, DiJavascript1, DiMongodb, DiNodejs, DiReact,
  DiRedis
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>


       <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

             <Col xs={4} md={2} className="tech-icons">
        <DiAws />
      </Col>

       <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiRedis />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
    </Row>
  );
}

export default Techstack;
