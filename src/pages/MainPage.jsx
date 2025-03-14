import { Container } from "reactstrap";
import "../css/style.css";
import knox from "../image/video/nashville.mp4";
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

console.log(knox);

function MainPage(props) {
  return (
    <Container fluid className="p-0">
      <div className="fullscreen-video-container position-relative vh-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute w-100 h-100 object-fit-cover"
        >
          <source src={knox} type="video/mp4" />
        </video>

        <div className="overlay-content position-relative z-1 d-flex flex-column align-items-center justify-content-center text-center h-100 px-3">
          <h3 className="display-6 fw-semibold text-white  mb-2">
            Welcome to My Portfolio
          </h3>
          <h1 className="display-1 fw-bolder text-white  mb-5">
            Bridging Ideas & Innovation
          </h1>
          <Row className="justify-content-center w-100">
            <Col xs={12} md={8} lg={6}>
              <Button
                color="primary"
                size="lg"
                className="me-3 mb-3 mx-3 mb-md-0"
              >
                <Link
                  to="/about"
                  className="fs-4 text-white link-body-emphasis text-decoration-none"
                >
                  Enter
                </Link>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default MainPage;
