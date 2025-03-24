import { Link, useLocation } from "react-router-dom";
import "../css/footer.css";
import inLogo from "../image/png/linkedin.png";
import gitLogo from "../image/png/github.png";
import beLogo from "../image/png/behance.png";

function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      <span className="px-5 mb-1 mb-md-0 text-body-secondary">
        © 2025 Phillip Navarre |{" "}
        <Link
          to="https://etafourteen.webflow.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sponsored By Eta 14
        </Link>
      </span>

      <ul className="nav px-5 justify-content-end list-unstyled d-flex">
        <li className="nav-item mx-1">
          <Link
            className="link-body-emphasis nav-link p-1 text-decoration-none d-flex align-items-center fs-6"
            to="https://github.com/One4TheNation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="me-1 fs-5 text-body-secondary"
              src={gitLogo}
              width="32"
              height="30"
            />
          </Link>
        </li>

        <li className="nav-item mx-1">
          <Link
            className="link-body-emphasis nav-link p-1 text-decoration-none d-flex align-items-center fs-6"
            to="https://www.behance.net/P-Navarre"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="me-1 fs-5 text-body-secondary"
              src={beLogo}
              width="32"
              height="32"
            />
          </Link>
        </li>
        <li className="nav-item mx-1">
          <Link
            className="link-body-emphasis nav-link p-1 text-decoration-none d-flex align-items-center fs-6"
            to="https://www.linkedin.com/in/jpnavarre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="me-1 fs-5 text-body-secondary"
              src={inLogo}
              width="32"
              height="32"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
