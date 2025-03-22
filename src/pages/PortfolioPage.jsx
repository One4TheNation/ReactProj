import "../css/style.css";
import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

import background1 from "../image/sincerely-media.jpg";
import background2 from "../image/doula.jpeg";
import background4 from "../image/crystals.jpeg";
import background5 from "../image/painting.jpeg";
import background6 from "../image/Love.jpeg";

function PortfolioPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <main
      role="main"
      className="container text-center d-flex flex-column align-items-center justify-content-center"
    >
      <div className="position-relative my-5 p-5 text-center text-muted bg-body">
        <h1 className="fw-bolder text-body-emphasis display-5">
          From Vision to Brand: Your Story, Your Identity
        </h1>
        <p className="col-lg-6 mx-auto mb-4">
          I've helped many brands transform their ideas into meaningful
          identities. For me, branding is more than visuals—it's about creating
          a story that connects with people. Through strategy, design, and
          storytelling, I help bring visions to life in a way that feels
          authentic and lasting.
        </p>
      </div>
      <div className="resume-page">
        <div className="album py-2 bg-body-white">
          <div className="container">
            <h2 className="fw-semibold">Esteemed Customers</h2>
            <hr className="featurette-divider"></hr>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="overflow-hidden card g-0 border shadow-sm">
                  <img
                    className="backgroundpics | bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src={background2}
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">Rooted Gem</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleNavigation("/portfolio/rg")}
                        >
                          View
                        </button>
                      </div>
                      <small className="text-body-secondary">2024</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="overflow-hidden card g-0 border shadow-sm">
                  <img
                    className="backgroundpics | bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src={background5}
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">Junior Brown</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          onClick={() => handleNavigation("/portfolio/jb")}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                      </div>
                      <small className="text-body-secondary">2024</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="overflow-hidden card g-0 border shadow-sm">
                  <img
                    className="backgroundpics | bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src={background6}
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                  <div className="card-body ">
                    <h5 className="fw-semibold">T.A.G</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleNavigation("/portfolio/tag")}
                        >
                          View
                        </button>
                      </div>
                      <small className="text-body-secondary">2023</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="overflow-hidden card g-0 border shadow-sm">
                  <img
                    className="backgroundpics | bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src={background1}
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">T.A.C</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleNavigation("/portfolio/tac")}
                        >
                          View
                        </button>
                      </div>
                      <small className="text-body-secondary">2022</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="overflow-hidden card g-0 border shadow-sm">
                  <img
                    className="backgroundpics | bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src={background4}
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">Mystical Essences</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleNavigation("/portfolio/me")}
                        >
                          View
                        </button>
                      </div>
                      <small className="text-body-secondary">2020</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="overflow-hidden card g-0 border shadow-sm">
                  <img
                    className="backgroundpics | bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src={background1}
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">Nikki Nails</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleNavigation("/portfolio/nnk")}
                        >
                          View
                        </button>
                      </div>
                      <small className="text-body-secondary">2024</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PortfolioPage;
