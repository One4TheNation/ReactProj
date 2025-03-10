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
import mongoLogo from "../image/png/mongo.png";
import htmlLogo from "../image/png/html-1.png";
import cssLogo from "../image/png/css-3.png";
import javascriptLogo from "../image/png/javascript-1.png";
import handlebarsLogo from "../image/png/handlebars-1.png";
import nodejsLogo from "../image/png/nodejs-3.png";
import githubLogo from "../image/png/github-icon-1.png";
import tailwindcssLogo from "../image/png/tailwindcss.png";
import sqlLogo from "../image/png/sql.png";
import visualLogo from "../image/png/visual.png";
import csharpLogo from "../image/png/csharp.png";
import cplusLogo from "../image/png/cplus.png";
import ccLogo from "../image/png/cc.png";
import pythonLogo from "../image/png/python.png";
import figmaLogo from "../image/png/figma.png";

function AboutPage(props) {
  return (
    <main role="main" className="container-fluid  d-flex flex-column">
      <div className="bg-white pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <h1 className="fw-bold display-4 text-gray-900">
                Building Brighter Futures with UX, Full-Stack Dev, and Business
                Growth
              </h1>
              <p className="mt-6 pt-1 text-xl text-gray-500">
                I have embraced the power of knowledge, learning the languages
                of code as a warrior embraces his weapons. These tools are not
                just lines and symbols—they are the very essence of the digital
                realm. With them, I shape the User Experience, crafting pathways
                that guide those who use the design, and the User Interface,
                ensuring it is both intuitive and powerful. I am not just a
                creator; I am a bridge between form and function, building the
                future with every keystroke
              </p>
              {/* <Button color="primary" className="mt-4">
                Get Started
              </Button> */}
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-2 flex items-center justify-center w-screen h-screen py-auto my-auto">
        <Container>
          <h1 className="fw-bold display-5">My Story</h1>
          <p className="fst-italic fw-lighter">
            "The greatest discovery of all time is that a person can change his
            future by merely changing his attitude." - William James
          </p>
          <p id="aboutParagraph">
            I’m a creative problem-solver who thrives at the intersection of
            design, technology, and business. Whether building intuitive
            applications, designing visually stunning interfaces, or developing
            strategic solutions, I’m driven by a passion for making complex
            ideas simple and accessible. With experience ranging from managing
            tech accounts to launching my own clothing brand, Eta Fourteen, I’ve
            honed a unique skill set in strategy, design, and marketing. I
            believe that every line of code and design choice should serve a
            purpose—whether that’s enhancing the user experience, optimizing
            processes, or delivering products that people love. I’m always
            excited by the transformative potential of emerging technologies
            like AI and LLMs, and I approach every project with a user-first
            mindset, merging functionality with aesthetics to create solutions
            that empower people, drive growth, and push the boundaries of what’s
            possible.
          </p>
        </Container>
      </div>

      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-square"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 className="fw-normal">Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
          </div>
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-square"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 className="fw-normal text-align-center">Heading</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
          </div>
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-square"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 className="fw-normal">Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
          </div>
        </div>
      </div>
      <hr className="featurette-divider"></hr>

      <div className="bg-gray-100 py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <h2 className="fw-bold display-5 text-gray-900 text-center">
                All the info you need - in one place
              </h2>
              <p className="mt-6 text-xl text-gray-500 text-center">
                Save yourself time by keeping all the info, CVs, skills,
                ratings, and contact details in one place.
              </p>
              <Row className="mt-4">
                <Col md={3}>
                  <Card>
                    <CardBody>
                      <img
                        className="h-12 w-12 rounded-full"
                        src={githubLogo}
                        width="35"
                        height="35"
                        alt="GitHub Logo"
                      />
                      <CardTitle tag="h3" className="mt-4">
                        Cody Fisher
                      </CardTitle>
                      <CardText>8:22 AM with the team</CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <CardBody>
                      <img
                        className="h-12 w-12 rounded-full"
                        src={visualLogo}
                        width="35"
                        height="35"
                        alt="Visual Logo"
                      />
                      <CardTitle tag="h3" className="mt-4">
                        Cody Fisher
                      </CardTitle>
                      <CardText>8:22 AM with the team</CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <CardBody>
                      <img
                        className="h-12 w-12 rounded-full"
                        src={figmaLogo}
                        width="38"
                        height="35"
                        alt="Figma Logo"
                      />
                      <CardTitle tag="h3" className="mt-4">
                        John Doe
                      </CardTitle>
                      <CardText>Learn More</CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <CardBody>
                      <img
                        className="h-12 w-12 rounded-full"
                        src={ccLogo}
                        width="35"
                        height="35"
                        alt="Creative Cloud Logo"
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
      <hr className="featurette-divider"></hr>
      <div className="py-5">
        <Container>
          <h1 className="pb-5 fw-bold text-center display-5">
            Coding Knowledge
          </h1>
          <Row>
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
                    src={cplusLogo}
                    width="45"
                    height="auto"
                    alt="cplus logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={csharpLogo}
                    width="45"
                    height="auto"
                    alt="csharp logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={sqlLogo}
                    width="45"
                    height="auto"
                    alt="sql logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={nodejsLogo}
                    width="45"
                    height="auto"
                    alt="nodejs logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={mongoLogo}
                    width="45"
                    height="auto"
                    alt="mongo logo"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <CardBody>
                  <img
                    className="d-block mx-auto mb-4"
                    src={pythonLogo}
                    width="45"
                    height="auto"
                    alt="python logo"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default AboutPage;
