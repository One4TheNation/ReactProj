import "../css/style.css";
import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function ContactPage(props) {
  return (
    <main
      role="main"
      className="container text-center d-flex flex-column align-items-center justify-content-center"
    >
      <div className="container my-5 pb-5">
        <div className="position-relative p-5 text-center text-muted bg-body border rounded-3">
          {/* <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button> */}
          {/* <svg className="bi mt-5 mb-3" width="48" height="48"><use xlink:href="#check2-circle"></use></svg> */}
          <h1 className="text-body-emphasis fw-bold display-4">Contact Me</h1>
          <h4 className="text-gray-700">
            "I’d Love to Hear From You – Drop Me a Line!"
          </h4>
          <p className="col-lg-8 text-xl mx-auto mb-4">
            I'm excited to hear from you! Whether you’ve just want to say hello,
            I’m here and ready to chat. I believe every conversation is an
            opportunity to create something great, and I can’t wait to connect
            with you. So don’t be shy – drop me a message, and let’s make
            something amazing happen together. I look forward to hearing from
            you!
          </p>
          <div className="mb-5">
            <Button className="fs-6 bg-transparent">
              <Link
                className="text-decoration-none text-primary"
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto: 14TN@proton.me";
                  e.preventDefault();
                }}
              >
                Email
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <h1 className="text-body-emphasis fw-bold display-6">
        Extra Help & Professional Support
      </h1>
      <div className="text-xl col-md-8">
        <p className="mt-2">
          I founded ETA Fourteen with one clear mission: to help small
          businesses get off the ground and succeed. I know how challenging it
          can be to navigate the digital world, so I built this company to give
          you the tools, knowledge, and support you need to grow. It's not about
          making a quick profit for me—it's about empowering brands to stand
          strong and thrive.
        </p>
        <p className="mb-2">
          ETA Fourteen is backed by a team of experienced tech professionals who
          specialize in creating custom web and app solutions. Whether you’re
          starting from scratch or need help with an existing project, we offer
          end-to-end services designed to meet your unique needs. From building
          a solid foundation for your digital presence to ensuring it stays
          secure and performs at its best, we're here to help you every step of
          the way. Let’s work together to turn your vision into reality with
          solutions that truly make a difference.
        </p>
      </div>

      <div className="mt-3">
        <Button size="md" className="btn5 px-4">
          <Link
            className="fs-6 text-white link-warning text-decoration-none"
            to="https://etafourteen.webflow.io/"
            target="_blank"
          >
            Eta Fourteen
          </Link>
        </Button>
      </div>
    </main>
  );
}

export default ContactPage;
