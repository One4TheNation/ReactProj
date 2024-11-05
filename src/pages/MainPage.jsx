import "../css/style.css";
import logo from "../image/website.png";

console.log(logo);

function MainPage(props) {
  return (
    <main className="container-fluid text-center d-flex flex-column align-items-center justify-content-center">
      <div className="flex p-4 items-center justify-center w-screen h-screen py-auto my-auto">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          alt="logo"
          width="74"
          height="72"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
        <p className="lead mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Primary button
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Secondary
          </button>
        </div>
      </div>

      <div className="container px-2 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Columns with icons</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#collection"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="2em" height="2em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
