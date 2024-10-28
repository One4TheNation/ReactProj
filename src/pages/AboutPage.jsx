import "../css/style.css";
import React from "react";

function AboutPage(props) {
  return (
    <main
      role="main"
      className="container-fluid text-center vh-100 d-flex flex-column align-items-center justify-content-center"
    >
      <div className="flex items-center justify-center w-screen h-screen py-auto my-auto">
        <h1 className="fw-bold display-4">You Think You Know Me...</h1>
        <p className=" px-5 fst-italic fw-lighter">
          "The greatest discovery of all time is that a person can change his
          future by merely changing his attitude." - William James
        </p>
        <p id="aboutParagraph" className=" px-5">
          I'm a multifaceted professional with a passion for innovation and
          problem-solving. My diverse background, spanning from corporate
          leadership to entrepreneurial ventures, equips me with a unique
          perspective that blends technical expertise with creative thinking.
          <br></br>
          <br></br>
          From managing key accounts for major tech companies to nurturing small
          businesses and nonprofits through my clothing brand, Eta Fourteen,
          I've honed my skills in strategy, marketing, and design. I'm
          particularly excited about the transformative power of emerging
          technologies, such as AI and Large Language Models (LLMs), and am
          actively expanding my technical capabilities through a Fullstack
          Coding program at Vanderbilt University.
          <br></br>
          <br></br>
          My time at Tennessee State University, where I earned a degree in
          Studio Art with a focus on Graphic Design, provided me with a strong
          foundation in visual communication and creative problem-solving. This
          artistic background, combined with my growing technical skills, allows
          me to approach projects from a unique perspective, blending aesthetics
          with functionality.
          <br></br>
          By fusing technical prowess with a deep understanding of user needs, I
          aim to create impactful solutions that drive business growth and
          enhance user experiences. Whether it's developing cutting-edge
          software, designing intuitive user interfaces, or crafting compelling
          marketing strategies, I'm committed to delivering exceptional results.
        </p>
        <p className="p-5">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Resume »
          </a>
        </p>
      </div>
    </main>
  );
}

export default AboutPage;
