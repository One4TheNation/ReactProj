import { Link, useLocation } from "react-router-dom";
import "../css/header.css";

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <container>
      <header className="header header-expand-lg d-flex flex-wrap justify-content-center py-3 border-bottom bg-primary">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none text-white"
        >
          <svg className="bi me-2" width="40" height="32">
            {/* <use xlink:href="#smile"></use> */}
          </svg>
          <span className="fs-4">Navarre</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link link-body-emphasis text-decoration-none text-white"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link link-body-emphasis text-decoration-none text-white"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className="nav-link link-body-emphasis text-decoration-none text-white"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/project"
              className="nav-link link-body-emphasis text-decoration-none text-white"
            >
              Project
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link link-body-emphasis text-decoration-none text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </container>
  );
}

export default Header;
