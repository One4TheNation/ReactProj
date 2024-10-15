import "../css/style.css";

function AboutPage(props) {
  return (
    <main role="main">
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Learn About Me!</h1>
          <p id="aboutParagraph">
            My experience ranges from managing key accounts for major tech
            companies to nurturing small businesses and nonprofits through my
            clothing brand, Eta Fourteen. This diverse background allows me to
            approach challenges from multiple angles, combining technical
            know-how with marketing savvy and design thinking. <br></br>
            <br></br>
            I'm passionate about leveraging emerging technologies, including AI
            and Large Language Models (LLMs), to create innovative solutions
            that not only meet technical requirements but also resonate with
            end-users through thoughtful design and targeted marketing
            strategies. Currently expanding my technical skills through a
            Fullstack Coding program at Vanderbilt University, I continuously
            seek to integrate my growing programming knowledge with my
            established expertise in sales, marketing, and design.
            <br></br>
            <br></br>
            This interdisciplinary approach enables me to create holistic
            solutions that drive business growth and enhance user satisfaction.
            Let's connect to explore how we can combine technology, design, and
            marketing to create impactful solutions in today's dynamic digital
            landscape!
          </p>
          <p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Resume »
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
