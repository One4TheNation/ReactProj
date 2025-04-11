import "../css/style.css";
import React from "react";

import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import myImage from "../image/Flip3.jpg";
import myImage1 from "../image/wp14.jpg";
import myImage2 from "../image/S22.jpg";
import myImage3 from "../image/20FE.jpg";
import samsung from "../image/samsung.jpg";

function ProjectPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <main
      role="main"
      className="container text-center d-flex flex-column align-items-center justify-content-center"
    >
      <div className="bg-white mt-4 pt-5 pb-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <h1 className="fw-bold display-4 text-gray-900">
                A Journey of Innovation and Collaboration
              </h1>
              <p className="mb-6 pt-1 text-xl text-gray-500 lead">
                Exploring My Role in Transformative Projects and Team
                Achievements
              </p>
              {/* <Button color="primary" className="mt-4">
                Get Started
              </Button> */}
            </Col>
          </Row>
        </Container>
      </div>

      <hr className="divap | featurette-divider px-5 mx-5"></hr>

      <div className="row mb-2 mt-4 pt-5">
        <div className="col-md-6">
          <div className="brder | row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-1 text-primary-emphasis">
                <img
                  className="bg-image"
                  src={samsung}
                  height="auto"
                  width="100px"
                />
              </strong>
              <h3 className="mb-1">College Expansion</h3>
              <div className="mb-1 text-body-secondary fs-10">
                Nov-2021 | Dec-2023
              </div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <button
                href="#"
                type="button"
                className="btn btn-sm btn-dark"
                onClick={() => handleNavigation("/project/samsungone")}
              >
                View
              </button>
            </div>
            <div className="col-auto d-none d-lg-block image-container">
              <img
                className="fluid-image"
                src={myImage}
                alt="placeholderpic"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className=" brder | row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-1 text-primary-emphasis">
                <img
                  className="bg-image"
                  src={samsung}
                  height="auto"
                  width="100px"
                />
              </strong>
              <h3 className="mb-1">Hackaton</h3>
              <div className="mb-1 text-body-secondary fs-10">
                Nov-2021 | Dec-2023
              </div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <button
                href="#"
                type="button"
                className="btn btn-sm btn-dark"
                onClick={() => handleNavigation("/project/samsungtwo")}
              >
                View
              </button>
            </div>
            <div className="col-auto d-none d-lg-block image-container">
              <img
                className="fluid-image"
                src={myImage2}
                alt="placeholderpic"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="brder | row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-1 text-primary-emphasis">
                <img
                  className="bg-image"
                  src={samsung}
                  height="auto"
                  width="100px"
                />
              </strong>
              <h3 className="mb-1">E-Commerce</h3>
              <div className="mb-1 text-body-secondary fs-10">
                Nov-2021 | Dec-2023
              </div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <button
                href="#"
                type="button"
                className="btn btn-sm btn-dark"
                onClick={() => handleNavigation("/project/samsungthree")}
              >
                View
              </button>
            </div>
            <div className="col-auto d-none d-lg-block image-container">
              <img
                className="fluid-image"
                src={myImage3}
                alt="placeholderpic"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="brder | row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-1 text-primary-emphasis">
                <img
                  className="bg-image"
                  src={samsung}
                  height="auto"
                  width="100px"
                />
              </strong>
              <h3 className="mb-1">User Development</h3>
              <div className="mb-1 text-body-secondary fs-10">
                Nov-2021 | Dec-2023
              </div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <button
                href="#"
                type="button"
                className="btn btn-sm btn-dark"
                onClick={() => handleNavigation("/project/samsungfour")}
              >
                View
              </button>
            </div>
            <div className="col-auto d-none d-lg-block image-container">
              <img
                className="fluid-image"
                src={myImage1}
                alt="placeholderpic"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default ProjectPage;
