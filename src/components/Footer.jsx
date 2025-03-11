import { Link, useLocation } from "react-router-dom";
import "../css/footer.css";

function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <span className=" px-5 mb-3 mb-md-0 text-body-secondary">
        © 2025 Phillip Navarre | Sponsored By Eta 14
      </span>

      <ul className="nav px-4 col-md-4 justify-content-end list-unstyled d-flex">
        <Link to="https://www.linkedin.com/in/jpnavarre/">
          <svg className="bi me-2" width="24" height="24">
            <use xlink:href="#smile"></use>
          </svg>
          <span className="fs-4 text-body-secondary ">Github</span>
        </Link>
        {/* <Link to="https://www.linkedin.com/in/jpnavarre/">
          <svg className="bi me-2" width="24" height="24">
            <use xlink:href="#smile"></use>
          </svg>
          <span className="fs-4 text-body-secondary ">Medium</span>
        </Link> */}
        <Link to="https://www.linkedin.com/in/jpnavarre/">
          <svg className="bi me-2" width="24" height="24">
            <use xlink:href="#smile"></use>
          </svg>
          <span className="fs-4 text-body-secondary ">LinkedIn</span>
        </Link>
      </ul>
    </footer>
  );
}

export default Footer;
