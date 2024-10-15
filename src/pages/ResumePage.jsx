import "../css/style.css";
import React from "react";

function ResumePage(props) {
  return (
    <main
      role="main"
      className="container-fluid text-center vh-100 d-flex flex-column align-items-center justify-content-center"
    >
      <div className="resume-page">
        <div className="jumbotron text-center">
          <h1>Take A Glance To My Work History</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-4">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-4">
              <h3>Column 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-4">
              <h3>Column 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <section id="about-me" className="container2">
              <h2 className="content-info">Resume</h2>
              <div className="content-main">
                <object
                  className="pdf"
                  data=""
                  width="800"
                  height="500"
                ></object>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
export default ResumePage;
