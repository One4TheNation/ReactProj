import "../css/style.css";
import React from "react";

import background1 from "../image/sincerely-media.jpg";
import background2 from "../image/doula.jpeg";
import background3 from "../image/matthieu.jpg";
import background4 from "../image/crystals.jpeg";
import background5 from "../image/painting.jpeg";
import background6 from "../image/Love.jpeg";
import { Outlet } from "react-router-dom";

function PortfolioPage(props) {
  return (
    <main
      role="main"
      className="container text-center d-flex flex-column align-items-center justify-content-center"
    >
      <div className="position-relative my-5 p-5 text-center text-muted bg-body">
        {/* <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button> */}
        {/* <svg className="bi mt-5 mb-3" width="48" height="48"><use xlink:href="#check2-circle"></use></svg> */}
        <h1 className="fw-bolder text-body-emphasis display-5">
          From Vision to Brand: Your Story, Your Identity
        </h1>
        <p className="col-lg-6 mx-auto mb-4">
          I’ve help many brands achieve their ideas into meaningful identities.
          For me, branding is more than visuals—it’s about creating a story that
          connects with people. Through strategy, design, and storytelling, I
          help bring visions to life in a way that feels authentic and lasting.
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
                  {" "}
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
                  {/* <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  {/* <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text> */}
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
                        >
                          View
                        </button>
                        {/* <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button> */}
                      </div>
                      <small className="text-body-secondary">2024</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="overflow-hidden card g-0 border shadow-sm">
                  {" "}
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
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        {/* <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button> */}
                      </div>
                      <small className="text-body-secondary">2024</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="overflow-hidden card g-0 border shadow-sm">
                  {" "}
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
                        >
                          View
                        </button>
                        {/* <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button> */}
                      </div>
                      <small className="text-body-secondary">2023</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="overflow-hidden card g-0 border shadow-sm">
                  {" "}
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
                        >
                          View
                        </button>
                        {/* <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button> */}
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
                        >
                          View
                        </button>
                        {/* <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button> */}
                      </div>
                      <small className="text-body-secondary">2020</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="overflow-hidden card g-0 border shadow-sm">
                  {" "}
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
                        >
                          View
                        </button>
                        {/* <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
          >
            Edit
          </button> */}
                      </div>
                      <small className="text-body-secondary">2024</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <h2 className="pt-5 fw-bolder">Probono Work</h2>
            <hr className="featurette-divider"></hr>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
<div className="overflow-hidden card g-0 border shadow-sm">                  <img
                    className="bd-placeholder-img card-img-top"
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
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">2024</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
<div className="overflow-hidden card g-0 border shadow-sm">                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src={background1}
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">Real Talk</h5>
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
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">2025</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
<div className="overflow-hidden card g-0 border shadow-sm">                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src={background1}
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                  <div className="card-body">
                    <h5 className="fw-semibold">Culture Corner</h5>
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
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">2020</small>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
export default PortfolioPage;

{
  /* <div class="col-md-4">
             <div class="content"> <a href="#">
                     <div class="content-overlay"></div> <img class="content-image" src="https://i.imgur.com/CS59IJZ.jpg">
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">Khumbu Valley Hotel</h3>
                         <p class="content-text"><i class="fa fa-map-marker"></i> Nepal</p>
                     </div>
                 </a> </div>
         </div> */
}
