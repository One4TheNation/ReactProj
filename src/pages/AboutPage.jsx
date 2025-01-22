import { Link } from "react-router-dom";
import "../css/style.css";
import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import BootstrapLogo from "../image/png/bootstrap-5-1.png";
import htmlLogo from "../image/png/html-1.png";
import cssLogo from "../image/png/css-3.png";
import javascriptLogo from "../image/png/javascript-1.png";
import handlebarsLogo from "../image/png/handlebars-1.png";
import nodejsLogo from "../image/png/nodejs-3.png";
import githubLogo from "../image/png/github-icon-1.png";
import tailwindcssLogo from "../image/png/tailwindcss.png";
import illustratorLogo from "../image/png/illustrator.png";
import indesignLogo from "../image/png/indesign.png";
import photoshopLogo from "../image/png/photoshop.png";
import xdLogo from "../image/png/xd.png";
import figmaLogo from "../image/png/figma-icon.png";

function AboutPage(props) {
  return (
    <main role="main" className="container-fluid  d-flex flex-column">
      <div className="bg-white py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="text-4xl font-bold text-gray-900">
                Learner of Code, Architect of Experience
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                I have embraced the power of knowledge, learning the languages
                of code as a warrior embraces his weapons. These tools are not
                just lines and symbols—they are the very essence of the digital
                realm. With them, I shape the User Experience, crafting pathways
                that guide those who use the design, and the User Interface,
                ensuring it is both intuitive and powerful. I am not just a
                creator; I am a bridge between form and function, building the
                future with every keystroke
              </p>
              <Button color="primary" className="mt-4">
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-5">
        <Container>
          <Row>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={githubLogo}
                    width="45"
                    height="auto"
                    alt="github logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={BootstrapLogo}
                    width="45"
                    height="auto"
                    alt="bootstrap logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={tailwindcssLogo}
                    width="45"
                    height="auto"
                    alt="tailwindcss logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={handlebarsLogo}
                    width="45"
                    height="auto"
                    alt="handlebars logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={htmlLogo}
                    width="45"
                    height="auto"
                    alt="html logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={cssLogo}
                    width="45"
                    height="auto"
                    alt="css logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={javascriptLogo}
                    width="45"
                    height="auto"
                    alt="javascript logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={illustratorLogo}
                    width="45"
                    height="auto"
                    alt="illustrator logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={indesignLogo}
                    width="45"
                    height="auto"
                    alt="indesign logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={photoshopLogo}
                    width="45"
                    height="auto"
                    alt="photoshop logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={xdLogo}
                    width="45"
                    height="auto"
                    alt="xd logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={figmaLogo}
                    width="45"
                    height="auto"
                    alt="figma logo"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-gray-100 py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="text-3xl font-bold text-gray-900">
                All the info you need - in one place
              </h2>
              <p className="mt-6 text-xl text-gray-500">
                Save yourself time by keeping all the info, CVs, skills,
                ratings, and contact details in one place.
              </p>
              <Row className="mt-4">
                <Col md={6}>
                  <Card>
                    <CardBody>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="/api/placeholder/48/48"
                        alt="Cody Fisher"
                      />
                      <CardTitle tag="h3" className="mt-4">
                        Cody Fisher
                      </CardTitle>
                      <CardText>8:22 AM with the team</CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <CardBody>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="/api/placeholder/48/48"
                        alt="John Doe"
                      />
                      <CardTitle tag="h3" className="mt-4">
                        John Doe
                      </CardTitle>
                      <CardText>Learn More</CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="flex items-center justify-center w-screen h-screen py-auto my-auto">
        <h1 className="fw-bold display-4">You Think You Know Me...</h1>
        <p className=" px-5 fst-italic fw-lighter">
          "The greatest discovery of all time is that a person can change his
          future by merely changing his attitude." - William James
        </p>
        <p id="aboutParagraph" className=" px-5">
          I'm a multifaceted professional with a passion for innovation and
          problem-solving. My diverse background, spanning from corporate
          leadership to entrepreneurial ventures, equips me with a unique
          perspective that blends technical expertise with creative thinking.
          <br></br>
          <br></br>
          From managing key accounts for major tech companies to nurturing small
          businesses and nonprofits through my clothing brand, Eta Fourteen,
          I've honed my skills in strategy, marketing, and design. I'm
          particularly excited about the transformative power of emerging
          technologies, such as AI and Large Language Models (LLMs), and am
          actively expanding my technical capabilities through a Fullstack
          Coding program at Vanderbilt University.
          <br></br>
          <br></br>
          My time at Tennessee State University, where I earned a degree in
          Studio Art with a focus on Graphic Design, provided me with a strong
          foundation in visual communication and creative problem-solving. This
          artistic background, combined with my growing technical skills, allows
          me to approach projects from a unique perspective, blending aesthetics
          with functionality.
          <br></br>
          <br></br>
          By fusing technical prowess with a deep understanding of user needs, I
          aim to create impactful solutions that drive business growth and
          enhance user experiences. Whether it's developing cutting-edge
          software, designing intuitive user interfaces, or crafting compelling
          marketing strategies, I'm committed to delivering exceptional results.
        </p>
        <p className="p-5">
          <Link className="btn btn-primary btn-lg" to="/resume" role="button">
            Resume »
          </Link>
        </p>
      </div>
    </main>
  );
}

export default AboutPage;
