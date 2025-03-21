import { Link } from "react-router-dom";
import "../css/style.css";
import React from "react";
import {
  Dropdown,
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
import nodejsLogo from "../image/png/nodejs-3.png";
import vscLogo from "../image/png/visual.png";
import tailwindcssLogo from "../image/png/tailwindcss.png";
import sqlLogo from "../image/png/sql.png";
import csharpLogo from "../image/png/csharp.png";
import cplusLogo from "../image/png/cplus.png";
import ccLogo from "../image/png/cc.png";
import figmaLogo from "../image/png/figma.png";
import tsuLogo from "../image/png/tsu.png";
import vandyLogo from "../image/vandy.jpg";
import depaulLogo from "../image/png/depaul.png";
import meImage from "../image/me1.jpeg";

function AboutPage(props) {
  return (
    <main role="main" className="container-fluid  d-flex flex-column">
      <div className="bg-white mt-4 mb-4 pt-5 pb-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <h1 className="fw-bold display-4 text-gray-900">
                Building Brighter Futures with Creative Growth
              </h1>
              <p className="mb-6 pt-1 text-xl text-gray-500">
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

      <hr className="divap | featurette-divider px-5 mx-5"></hr>

      <div className="flex items-center justify-center w-screen h-screen py-5 my-auto">
        <Container>
          <h1 className="mt-3 fw-bolder display-6">My Story</h1>

          <div className="row featurette">
            <div className="col-md-8">
              <p className="lead">
                I’m a creative problem-solver who thrives at the intersection of
                design, technology, and business. Whether building intuitive
                applications, designing visually stunning interfaces, or
                developing strategic solutions, I’m driven by a passion for
                making complex ideas simple and accessible. With experience
                ranging from managing national tech accounts, I’ve honed a
                unique skill set in strategy, design, and marketing. I believe
                that every line of code and design choice should serve a
                purpose—whether that’s enhancing the user experience, optimizing
                processes, or delivering products that people love. I’m always
                excited by the transformative potential of emerging technologies
                like AI and LLMs, and I approach every project with a user-first
                mindset, merging functionality with aesthetics to create
                solutions that empower people, drive growth, and push the
                boundaries of what’s possible.
              </p>
              <p className="lead">
                Beyond my primary work, I find immense fulfillment in creative
                expression through printmaking, the meditative rhythm of
                woodcarving, and the soothing, nature-inspired strokes of
                painting—channeling the spirit of Bob Ross with every
                brushstroke.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg mx-auto"
                width="400"
                height="400"
                src={meImage}
                role="img"
                // aria-label="Placeholder: 500x500"
                // preserveAspectRatio="xMidYMid slice"
                // focusable="false"
              />
            </div>
          </div>
        </Container>
      </div>

      <hr className="divap | featurette-divider px-5 mx-5"></hr>

      <div className="bg-gray-100 py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <h2 className="fw-bold display-6 text-gray-900 text-center">
                Intercollegiate Education
              </h2>
              <p className="mt-6 pb-4 text-xl text-gray-500 text-center fst-italic fw-lighter">
                "The greatest discovery of all time is that a person can change
                his future by merely changing his attitude." - William James
              </p>
              <div className="container marketing">
                <div className="row text-center">
                  <div className="col-lg-4 mx-auto">
                    <img
                      className="bd-placeholder-img mx-auto rounded-square px-4 pb-1"
                      width="275"
                      height="75"
                      src={tsuLogo}
                      role="img"
                      // aria-label="Placeholder"
                      // preserveAspectRatio="xMidYMid slice"
                      // focusable="false"
                    />
                    <h4 className="fw-normal pt-4">Bachelors of Science</h4>
                    <p>Graphic Design & Art Education</p>
                  </div>
                  <div className="col-lg-4 mx-auto">
                    <img
                      className="bd-placeholder-img mx-auto rounded-square px-48 pb-1"
                      width="280"
                      height="90"
                      src={vandyLogo}
                      role="img"
                      // aria-label="Placeholder"
                      // preserveAspectRatio="xMidYMid slice"
                      // focusable="false"
                    />
                    <h4 className="fw-normal pt-2">Certification of Coding</h4>
                    <p>Full-stack Coding and Development</p>
                  </div>
                  {/* <div className="col-lg-4 mx-auto">
                    <img
                      className="bd-placeholder-img mx-auto rounded-square px-4 pb-1"
                      width="280"
                      height="90"
                      src={depaulLogo}
                      role="img"
                      // aria-label="Placeholder"
                      // preserveAspectRatio="xMidYMid slice"
                      // focusable="false"
                    />
                    <h4 className="fw-normal pt-2">Masters of Science</h4>
                    <p>(HCI) Human–computer Interaction</p>
                  </div> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <hr className="divap | featurette-divider px-5 mx-5"></hr>

      <div className="py-auto">
        <Container>
          <div className="py-5">
            <Container>
              <h1 className="pb-5 fw-bold text-center display-6">
                Software Acumen
              </h1>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
                <Col>
                  <Card>
                    <CardBody>
                      <img
                        className="d-block mx-auto mb-4"
                        src={vscLogo}
                        width="45"
                        height="auto"
                        alt="bootstrap logo"
                      />
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardBody>
                      <img
                        className="d-block mx-auto mb-4"
                        src={ccLogo}
                        width="45"
                        height="auto"
                        alt="tailwindcss logo"
                      />
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardBody>
                      <img
                        className="d-block mx-auto mb-4"
                        src={figmaLogo}
                        width="55"
                        height="auto"
                        alt="handlebars logo"
                      />
                    </CardBody>
                  </Card>
                </Col>
                <Col>
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
                <Col>
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
                <Col>
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
                <Col>
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
                <Col>
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
                <Col>
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
                <Col>
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
                <Col>
                  <Card>
                    <CardBody>
                      <img
                        className="d-block mx-auto mb-4"
                        src={BootstrapLogo}
                        width="55"
                        height="auto"
                        alt="mongo logo"
                      />
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardBody>
                      <img
                        className="d-block mx-auto mb-4"
                        src={tailwindcssLogo}
                        width="55"
                        height="auto"
                        alt="python logo"
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </main>
  );
}

export default AboutPage;
