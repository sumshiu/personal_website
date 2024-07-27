import React from "react";
import "./about.css";
import momo from "../../assets/cat_momo.png";

const About = () => {
  return (
    <div className="port__about">
      <img src={momo} alt="cat momo"></img>
      <div className="port__about-content">
        <h1>About Me</h1>
        <p>
          Hi! I am from Dallas, TX pursuing a B.S. in Computer Science at Texas
          A&M University (class of '26). I an aspiring full-stack developer with
          experience in building web applications using JavaScript, React,
          Node.js, and other technologies. I have a passion for learning and
          solving problems, and I'm always looking for new challenges to tackle.
          In my free time, I enjoy reading, working out, and spending time with
          my family and friends. I also have a cat named Momo (=˃ᆺ˂=).
        </p>
      </div>
    </div>
  );
};

export default About;
