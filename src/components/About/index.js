import React from "react";
import profilepic from "../../assets/images/portfolio-pic.jpg";

function About() {
  return (
    <div id="about" className="about-me-container">
      <h3>ABOUT ME...</h3>
      <img className="profile-pic" src={profilepic} alt="profile pic" />
      <p>
        I am a full stack developer leveraging over twenty years in the
        financial industry at Merrill Lynch as a financial analyst. During this
        time in the evenings, I obtained my Associate of Science in Liberal Arts
        and Sciences from Rowan College at Burlington County and I'm currently
        attending Penn State to obtain my Bachelor of Science in Finance.
      </p>
      <p>
        In addition, I recently completed the University of Pennsylvania LSP
        School Full Stack Development Bootcamp. This was an intense 24 week
        program where I developed strong skills in HTML, CSS, JavaScript, React,
        Node, Express, MongoDB, and MySQL. This program also taught me a
        multitude of frameworks and libraries.
      </p>
      <p>
        As a professional working in the financial industry I developed a strong
        aptitude for problem solving and an analytical mindset. I take pride
        that I have strong skills in refractoring and writing clean code and the
        MERN stack. I believe that I can be a positive and strong contributor to
        any company and team. As I change careers, I'm looking forward to my
        next adventure!
      </p>
    </div>
  );
}

export default About;
