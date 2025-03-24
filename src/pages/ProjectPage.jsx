import "../css/style.css";
import React from "react";

import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

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
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-1 text-primary-emphasis">
                Samsung
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
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleNavigation("project/college_expansion")}
              >
                View
              </button>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-1 text-primary-emphasis">
                Samsung
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
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-1 text-primary-emphasis">
                Samsung
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
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-1 text-primary-emphasis">
                Samsung
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
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default ProjectPage;
