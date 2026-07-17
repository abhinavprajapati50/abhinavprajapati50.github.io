import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import chatlist from "../../Assets/Projects/chatlist.png";
import saloon from "../../Assets/Projects/saloon.png";
import axismf from "../../Assets/Projects/axis-mutual-fund.png";
import smartstartusa from "../../Assets/Projects/smartstartusa.png";
import bmcHealth from "../../Assets/Projects/bmchealthcare.png";
import ohif from "../../Assets/Projects/Bmc-radiology-ohif.png";
import radiologyImg from "../../Assets/Projects/ohif-bmc.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

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
              imgPath={axismf}
              isBlog={false}
              title="Axis Mutuak Fund"
              description="n Indian asset management company that offers a wide range of mutual fund investment solutions to help individuals build long-term wealth and achieve their financial goals."
              technology="ReactsJs, Context-api."
              demoLink="https://www.axismf.com/"

            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmcHealth}
              isBlog={false}
              title="BMC Healthcare"
              description="This project is related to healthcare management and involves developing a web application for managing patient records and appointments."
              technology="ReactsJs, Context-api."
              demoLink="https://qa.bmchealth.in/"

            />
          </Col>



           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={radiologyImg}
              isBlog={false}
              title="BMC OHIF"
              description="This project is related to medical imaging and involves developing a web application for viewing and analyzing medical images."
              technology="ReactsJs, Context-api."
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Smart Start USA"
              description="This prject is learning base plateform user can come and learn the subjects like english, maths, science."
              technology="ReactsJs, Context-api."
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="PolyTrade"
              description="This project is based on the Treding application. I worked on ReactJs developer in that project.
                           My Roles is to fix to Ui and calculating the things by formulas  which given from client."
              technology="ReactJs, Context-api, Redux, NodeJs, Mongodb"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartstartusa}
              isBlog={false}
              title="Smart Start USA"
              description="Learning base plateform which is user can come our platform and learn it but we have free courses and paiod courses we have it."
              demoLink="https://school.smartstartus.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saloon}
              isBlog={false}
              title="Saloon clould"
              technology="ReactsJs, Context-api."
              description="This project based on saloon. In this project my role is Reactjs.In this project i can build the reccuring datae when user can create new-appointment when he can select the days which consider as a week of the days and selected days haveto crete reccuring appoyment in selected day of the weeks day and time"
              demoLink="https://my.salonincloud.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatlist}
              isBlog={false}
              title="ChatList"
              description="This Application is for who can find the apartment/flat for the rent. In this project my role is fix the generate date to seled date, Hide the street no etc. "
              demoLink="https://www.chatlist.co.il/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
