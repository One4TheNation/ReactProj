import React from "react";
import "../css/style.css";

import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";

function SamsungThree() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="px-2 d-flex flex-column bg-white text-dark pb-5">
        {/* Header */}

        <header className="py-4 d-flex justify-content-between">
          <button
            className="btn btn-link p-0 border-0"
            onClick={() => navigate("/project")}
            aria-label="Back to portfolio"
          >
            <i className="bi bi-x-circle-fill xl-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
            </i>
          </button>
          <div className="medium fw-large">Junior Brown</div>
        </header>
      </div>
      <div className="container text-center d-flex flex-column align-items-center justify-content-center bg-white text-dark">
        {/* Main Title Section */}
        <section className="text-center py-5">
          <h1 className="display-1 fw-bold lh-1">IS WINNING SELFISH?</h1>
          <p className="mt-4 small">
            Sophia Smith has a lot to give. And give and give and give.
          </p>
        </section>

        {/* Product Grid */}
        <section className="d-flex flex-column flex-md-row w-100 mt-5">
          {/* Left Product - Shoes */}
          <div className="w-100 w-md-50 bg-light position-relative">
            <div
              className="p-4 d-flex align-items-center justify-content-center"
              style={{ height: "400px" }}
            >
              <img
                src="/api/placeholder/400/320"
                alt="Green athletic shoes"
                className="h-100 object-fit-cover"
              />
            </div>
            <div className="position-absolute bottom-0 start-0 p-4">
              <p className="small text-secondary">Coming Soon</p>
              <h3 className="fs-3 fw-medium">Luka 4</h3>
              <button className="mt-2 btn btn-light rounded-pill px-3 py-1 small">
                Get Notified
              </button>
            </div>
          </div>

          {/* Right Product - Model */}
          <div className="w-100 w-md-50 bg-light-subtle position-relative">
            <div
              className="p-4 d-flex align-items-center justify-content-center"
              style={{ height: "400px" }}
            >
              <img
                src="/api/placeholder/400/320"
                alt="Model in pink jacket"
                className="h-100 object-fit-cover"
              />
            </div>
            <div className="position-absolute bottom-0 start-0 p-4">
              <p className="small text-secondary">Style By Gabi Ruffels</p>
              <h3 className="fs-3 fw-medium">Subtlety's Not in the Lineup</h3>
              <button className="mt-2 btn btn-light rounded-pill px-3 py-1 small">
                Shop
              </button>
            </div>
          </div>
        </section>

        <section className="d-flex flex-column flex-md-row w-100">
          {/* Left Product - Shoes */}
          <div className="w-100 w-md-50 bg-light position-relative">
            <div
              className="p-4 d-flex align-items-center justify-content-center"
              style={{ height: "400px" }}
            >
              <img
                src="/api/placeholder/400/320"
                alt="Green athletic shoes"
                className="h-100 object-fit-cover"
              />
            </div>
            <div className="position-absolute bottom-0 start-0 p-4">
              <p className="small text-secondary">Coming Soon</p>
              <h3 className="fs-3 fw-medium">Luka 4</h3>
              <button className="mt-2 btn btn-light rounded-pill px-3 py-1 small">
                Get Notified
              </button>
            </div>
          </div>

          {/* Right Product - Model */}
          <div className="w-100 w-md-50 bg-light-subtle position-relative">
            <div
              className="p-4 d-flex align-items-center justify-content-center"
              style={{ height: "400px" }}
            >
              <img
                src="/api/placeholder/400/320"
                alt="Model in pink jacket"
                className="h-100 object-fit-cover"
              />
            </div>
            <div className="position-absolute bottom-0 start-0 p-4">
              <p className="small text-secondary">Style By Gabi Ruffels</p>
              <h3 className="fs-3 fw-medium">Subtlety's Not in the Lineup</h3>
              <button className="mt-2 btn btn-light rounded-pill px-3 py-1 small">
                Shop
              </button>
            </div>
          </div>
        </section>

        {/* Footer space */}
        <footer className="py-5"></footer>
      </div>
    </Container>
  );
}

export default SamsungThree;
