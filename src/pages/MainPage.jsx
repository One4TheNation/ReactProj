import { Container } from "reactstrap";
import "../css/style.css";
import logo from "../image/website.png";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

console.log(logo);

function MainPage(props) {
  return (
    <main className="container-fluid text-center d-flex flex-column align-items-center justify-content-center">
      <div className="flex p-4 items-center justify-center w-screen h-screen py-auto my-auto">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          alt="logo"
          width="74"
          height="72"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">
          Design. Innovate. Empower. In a world of change, I craft the future.
        </h1>
        <p className="lead mb-4">
          With years of experience in graphic design, web development, and
          UI/UX, I don't just create — I empower. Every project is a chance to
          shape experiences, elevate brands, and drive impact in a digital
          world. I blend creativity with strategy to craft solutions that not
          only stand out but endure. The future is ours to build, and I’m here
          to lead the way.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            src="/AboutPage"
            target="/AboutPage"
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
          >
            Enter
          </button>
          {/* <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            LinkedIn
          </button> */}
        </div>
      </div>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row container spacing={6} size={3}>
          <Col md={3}>
            <Card>
              <CardTitle tag="h3" style={{ fontWeight: "bold" }}>
                Aesthetics
              </CardTitle>
              <CardText>Love</CardText>
              <CardBody>Always care for one another</CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardTitle tag="h3" style={{ fontWeight: "bold" }}>
                Aesthetics
              </CardTitle>
              <CardBody></CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardTitle tag="h3" style={{ fontWeight: "bold" }}>
                Aesthetics
              </CardTitle>
              <CardBody></CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <div className="container px-2 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Application Knowledge</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#collection"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div
              cl
              assName="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
            >
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}

export default MainPage;
