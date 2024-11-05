import "../css/style.css";
import React from "react";

import background1 from "../image/sincerely-media.jpg";
import background2 from "../image/doula.jpg";
import background3 from "../image/matthieu.jpg";
import background4 from "../image/bryony-elena.jpg";
import background5 from "../image/painting.jpg";
import background6 from "../image/Love.jpeg";

function PortfolioPage(props) {
  return (
    <main
      role="main"
      className="container text-center d-flex flex-column align-items-center justify-content-center"
    >
      <div className="resume-page">
        <h2 className="pb-3 fw-bolder border-bottom">
          Small Business Branding
        </h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div
                id="tac-img"
                className=" card card cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  backgroundImage: `url(${background1})`,
                  backgroundPosition: "left",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    T.A.C
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto mx-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      ></img>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                id="tag-img"
                className=" card card cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  backgroundImage: `url(${background2})`,
                  backgroundPosition: "right",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Rooted Gem
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto mx-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      ></img>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                id="tag-img"
                className=" card card cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  backgroundImage: `url(${background3})`,
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Rae Createz
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto mx-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      ></img>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                id="tag-img"
                className=" card card cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  backgroundImage: `url(${background4})`,
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Nikki Nails Knox
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto mx-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      ></img>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                id="paint-img"
                className=" card card cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  backgroundImage: `url(${background5})`,
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Junior Brown
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto mx-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      ></img>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                id="tag-img"
                className=" card card cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{
                  backgroundImage: `url(${background6})`,
                  backgroundPosition: "right",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    T.A.G
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto mx-auto">
                    <li className="d-flex align-items-center">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      ></img>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-4">
              <h4 className="fw-normal">Mo</h4>
              <p className="fw-light">
                I spent three fulfilling years at Best Buy, honing my sales
                expertise. As a Multi-Channel Sales Expert, I excelled in
                customer analysis, timeline development, and other key skills.
                Prior to that, I served as a Mobile & Networking Sales
                Specialist, gaining valuable experience in the fast-paced tech
                industry. My time at Best Buy provided a solid foundation for my
                future career in sales and technology.
              </p>
            </div>
            <div className="col-sm-4">
              <h4 className="fw-normal">ETA</h4>
              <p className="fw-light">
                I dedicated three years & three summers to the role of
                Residential Education Counselor at the Massachusetts Institute
                of Technology. During this time, I was deeply involved in
                fostering a supportive and intellectually stimulating high
                school students in the upward bound program for MIT. I provided
                academic advising, organized social events, and addressed
                student concerns, contributing to their overall well-being and
                academic success.
              </p>
            </div>
            <div className="col-sm-4">
              <h4 className="fw-normal">TAC</h4>
              <p className="fw-light">
                I dedicated three years & three summers to the role of
                Residential Education Counselor at the Massachusetts Institute
                of Technology. During this time, I was deeply involved in
                fostering a supportive and intellectually stimulating high
                school students in the upward bound program for MIT. I provided
                academic advising, organized social events, and addressed
                student concerns, contributing to their overall well-being and
                academic success.
              </p>
            </div>
            <div className="col-sm-4">
              <h4 className="fw-normal">TAG</h4>
              <p className="fw-light">
                I dedicated three years & three summers to the role of
                Residential Education Counselor at the Massachusetts Institute
                of Technology. During this time, I was deeply involved in
                fostering a supportive and intellectually stimulating high
                school students in the upward bound program for MIT. I provided
                academic advising, organized social events, and addressed
                student concerns, contributing to their overall well-being and
                academic success.
              </p>
            </div>
            <div className="col-sm-4">
              <h4 className="fw-normal">Brown</h4>
              <p className="fw-light">
                I dedicated three years & three summers to the role of
                Residential Education Counselor at the Massachusetts Institute
                of Technology. During this time, I was deeply involved in
                fostering a supportive and intellectually stimulating high
                school students in the upward bound program for MIT. I provided
                academic advising, organized social events, and addressed
                student concerns, contributing to their overall well-being and
                academic success.
              </p>
            </div>
          </div>

          <h2 className="pb-3 fw-bolder">Bootcamp</h2>
          <div className="row">
            <div className="col-sm-4">
              <h4 className="fw-normal">Project 1</h4>
              <p className="fw-light">
                Starting as a Field Sales Manager, I rapidly advanced to
                National Retail Sales Manager, leading impactful teams
                nationwide. Samsung then promoted me to Business to Consumer
                Manager in 2021, where my market expertise, product knowledge,
                and innovative strategies drove exceptional results that
                cemented my reputation as a producer. With a proven track record
                of success, relentless growth mindset, and creativity.
              </p>
            </div>
            <div className="col-sm-4">
              <h4 className="fw-normal">Project 2</h4>
              <p className="fw-light">
                I spent three fulfilling years at Best Buy, honing my sales
                expertise. As a Multi-Channel Sales Expert, I excelled in
                customer analysis, timeline development, and other key skills.
                Prior to that, I served as a Mobile & Networking Sales
                Specialist, gaining valuable experience in the fast-paced tech
                industry. My time at Best Buy provided a solid foundation for my
                future career in sales and technology.
              </p>
            </div>
            <div className="col-sm-4">
              <h4 className="fw-normal">Project 3</h4>
              <p className="fw-light">
                I dedicated three years & three summers to the role of
                Residential Education Counselor at the Massachusetts Institute
                of Technology. During this time, I was deeply involved in
                fostering a supportive and intellectually stimulating high
                school students in the upward bound program for MIT. I provided
                academic advising, organized social events, and addressed
                student concerns, contributing to their overall well-being and
                academic success.
              </p>
            </div>
          </div>

          <h2 className="pb-3 fw-bolder">UX Research & UI Design</h2>
          <div className="row">
            <div className="col-sm-4">
              <h4 className="fw-normal">Project 1</h4>
              <p className="fw-light">
                Starting as a Field Sales Manager, I rapidly advanced to
                National Retail Sales Manager, leading impactful teams
                nationwide. Samsung then promoted me to Business to Consumer
                Manager in 2021, where my market expertise, product knowledge,
                and innovative strategies drove exceptional results that
                cemented my reputation as a producer. With a proven track record
                of success, relentless growth mindset, and creativity.
              </p>
            </div>
            <div className="col-sm-4">
              <h4 className="fw-normal">Project 2</h4>
              <p className="fw-light">
                I spent three fulfilling years at Best Buy, honing my sales
                expertise. As a Multi-Channel Sales Expert, I excelled in
                customer analysis, timeline development, and other key skills.
                Prior to that, I served as a Mobile & Networking Sales
                Specialist, gaining valuable experience in the fast-paced tech
                industry. My time at Best Buy provided a solid foundation for my
                future career in sales and technology.
              </p>
            </div>
            <div className="col-sm-4">
              <h4 className="fw-normal">Project 3</h4>
              <p className="fw-light">
                I dedicated three years & three summers to the role of
                Residential Education Counselor at the Massachusetts Institute
                of Technology. During this time, I was deeply involved in
                fostering a supportive and intellectually stimulating high
                school students in the upward bound program for MIT. I provided
                academic advising, organized social events, and addressed
                student concerns, contributing to their overall well-being and
                academic success.
              </p>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
export default PortfolioPage;
