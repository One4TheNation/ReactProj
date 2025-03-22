import "../css/style.css";
import React from "react";

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
            <a
              href="mailto: 14TN@proton.me"
              target="_blank"
              className="btn btn-primary btn-lg px-4"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <h1 className="text-body-emphasis fw-bold display-6">
        Extra Help & Professional Support
      </h1>
      <p className="text-xl col-md-8">
        If you're looking to bring your app or website to the next level, ETA
        Fourteen is here to help. There is an expert team of technological
        professionals to create customized, robust web and app solutions
        tailored to meet your specific needs. Whether you're starting from
        scratch or need ongoing support for your existing project, they offer
        end-to-end services that ensure your digital presence is seamless,
        secure, and high-performing. Reach out to them today, and let them turn
        your vision into reality with innovative solutions that make a
        difference.
      </p>

      <div className="mb-5">
        <a
          href="https://etafourteen.webflow.io/"
          target="_blank"
          className="btn btn-primary btn-lg px-4"
        >
          Eta Fourteen
        </a>
      </div>
    </main>
  );
}

export default ContactPage;
