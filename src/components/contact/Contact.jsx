import React from "react";
import "./contact.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import gmail from "../../assets/email.png";

const Contact = () => {
  return (
    <div className="port__contact">
      <h1> Contact Info </h1>
      <a href="https://www.linkedin.com/in/summerrwong/">
        <img src={linkedin} alt="linkedin"></img>
      </a>
      <a href="https://www.github.com/sumshiu">
        <img src={github} alt="github"></img>
      </a>
      <a href="mailto:summerrwong19@gmail.com">
        <img src={gmail} alt="email"></img>
      </a>
    </div>
  );
};

export default Contact;
