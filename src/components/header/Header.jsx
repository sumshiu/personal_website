import React from "react";
import "./header.css";
import { TypeAnimation } from "react-type-animation";
import summer from "../../assets/summer.png";

const Header = () => {
  return (
    <div className="port__header">
      <div className="port__header-name">
        <p>Summer Wong</p>
        {/* </div>

      <div className="port__header-summary"> */}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Is a Aspiring Software Engineer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Is a Junior CS at Texas A&M University",
            1000,
            "Is a Dreamer",
            1000,
            "Is Eager to Learn New Things",
            1000,
            "Is a Cat Lover",
            1000,
          ]}
          wrapper="span"
          speed={75}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <img src={summer} alt="Summer Wong" className="port__header-image"></img>
    </div>
  );
};

export default Header;
