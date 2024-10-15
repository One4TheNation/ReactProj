import "../css/style.css";
import React from "react";

function ResumePage(props) {
  return (
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
        </div>
      </div>
    </div>
  );
}
export default ResumePage;
