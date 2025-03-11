import { Link, useLocation } from "react-router-dom";
import "../css/footer.css";

function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-2 border-top">
      <span className="px-5 mb-1 mb-md-0 text-body-secondary">
        © 2025 Phillip Navarre | Sponsored By Eta 14
      </span>

      <ul className="nav px-3 justify-content-end list-unstyled d-flex">
        <li className="nav-item mx-1">
          <Link
            className="link-body-emphasis nav-link p-1 text-decoration-none d-flex align-items-center fs-6"
            to="https://github.com/One4TheNation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="me-1 fs-5 text-body-secondary"
              width="12"
              height="12"
            ></svg>
            Github
          </Link>
        </li>
        <li className="nav-item mx-1">
          <Link
            className="link-body-emphasis nav-link p-1 text-decoration-none d-flex align-items-center fs-6"
            to="https://www.linkedin.com/in/jpnavarre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="me-1 fs-5 text-body-secondary"
              width="12"
              height="12"
            ></svg>
            LinkedIn
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
