import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/header.css";
import FancyText from "@carefully-coded/react-text-gradient";

function Header() {
  const currentPage = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 576); // Bootstrap's sm breakpoint
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <container>
      <header className="header d-flex flex-wrap justify-content-between pb-2 pt-4 border-bottom ">
        {/* Logo - Left aligned on desktop/tablet, centered on mobile */}

        <FancyText
          gradient={{
            from: "#FC2D00",
            to: "#C247FF",
            type: "linear",
          }}
          animateTo={{ from: "#0063FC", to: "#229954" }}
          duration={2000}
        >
          <Link
            to="/"
            className={`d-flex align-items-center mb-3 link-secondary text-decoration-none text-white ${
              isMobile ? "mx-auto justify-content-center" : "ms-5"
            }`}
          >
            <span className="fs-4 fw-bold">Navarre</span>
          </Link>
        </FancyText>

        <button
          className="navbar-toggler d-lg-none pe-5 me-3 position-absolute top-1 end-0"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </span>
        </button>

        {/* Desktop navigation */}
        <ul className="nav nav-pills pe-5 d-none d-lg-flex">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link link-secondary text-decoration-none text-white"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link link-secondary text-decoration-none text-white"
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/project"
              className="nav-link link-secondary text-decoration-none text-white"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link link-secondary text-decoration-none text-white"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile dropdown menu */}
        <div
          className={`collapse navbar-collapse text-center px-3 ${
            isOpen ? "show" : ""
          } w-screen h-screen d-lg-none`}
          id="navbarNav"
        >
          <ul className="navbar-nav w-screen h-screen">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link link-secondary text-decoration-none text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link link-secondary text-decoration-none text-white"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/project"
                className="nav-link link-secondary text-decoration-none text-white"
                onClick={() => setIsOpen(false)}
              >
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link link-secondary text-decoration-none text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </container>
  );
}

export default Header;
