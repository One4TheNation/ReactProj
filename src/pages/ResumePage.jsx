import "../css/style.css";
import React from "react";

function ResumePage(props) {
  return (
    <main
      role="main"
      className="container text-center d-flex flex-column align-items-center justify-content-center"
    >
      <div className="resume-page">
        <div className="jumbotron text-center pb-5">
          <h1 className="fw-bold display-4">
            Take A Glance To My Work History
          </h1>
          <p className=" px-5 fst-italic fw-lighter">
            The tapestry of one's life is woven with the threads of experience.
            Each role, each challenge, each triumph contributes to the intricate
            pattern of one's professional journey.
          </p>
        </div>

        <h2 className="pb-3 fw-bolder">Notable Companies</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h4 className="fw-normal">Samsung</h4>
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
              <h4 className="fw-normal">Best Buy</h4>
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
              <h4 className="fw-normal">MIT</h4>
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

            <section id="about-me" className="container2 py-5">
              <h2 className="content-info">Resume</h2>
              <div className="content-main">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Download
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
export default ResumePage;
