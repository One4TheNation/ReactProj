import "../css/style.css";
import React from "react";

function ContactPage(props) {
  return (
    <main
      role="main"
      className="container text-center d-flex flex-column align-items-center justify-content-center"
    >
      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border rounded-3">
          {/* <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button> */}
          {/* <svg className="bi mt-5 mb-3" width="48" height="48"><use xlink:href="#check2-circle"></use></svg> */}
          <h1 className="text-body-emphasis">Placeholder jumbotron</h1>
          <p className="col-lg-8 mx-auto mb-4">
            This faded back jumbotron is useful for placeholder content. It's
            also a great way to add a bit of context to a page or section when
            no content is available and to encourage visitors to take a specific
            action.
          </p>
        </div>
      </div>

      {/* <div className="b-example-divider"></div> */}

      <h1 className="text-body-emphasis">Get started with Bootstrap</h1>
      <p className="fs-5 col-md-8">
        Quickly and easily get started with Bootstrap's compiled,
        production-ready files with this barebones example featuring some basic
        HTML and helpful links. Download all our examples to get started.
      </p>

      <div className="mb-5">
        <a href="https://etafourteen.webflow.io/" className="btn btn-primary btn-lg px-4">
          Eta Fourteen
        </a>
      </div>
    </main>
  );
}

export default ContactPage;
