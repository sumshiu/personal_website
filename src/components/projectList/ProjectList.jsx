import React from "react";
import "./projectList.css";

const ProjectList = () => {
  return (
    <div className="port__projectList">
      <h1>Projects</h1>
      <div />
      <div className="port__projectList-content">
        <h2>HackUTD 2023 Frontier Challenge</h2>
        <p>
          • Won 2nd Place in Frontier Software Challenge: "Predicting Customer
          Service Requests
        </p>
        <p>
          • Developed a deep neural network model using the Tensorflow Keras API
          and Frontier's data set of 50000+ entries of customer metrics to
          predict when a customer may need service repair for fiber internet
          connections
        </p>
        <h2>rootsToRetail</h2>
        <p>
          • Developed a web application using React and Firebase to analyze the
          best locations and prices for grocery store items in the chosen area
        </p>
        <p>
          • Implemented ChatGPT API to automate user user interactions and
          processes, enhancing efficiency and user experience by providing
          real-time, AI-driven responses and solutions
        </p>
        <h2>General Motors x Aggie Data Science Club</h2>
        <p>
          • Created a logistic regression model using Python and Tensorflow to
          investigate people's choices to purchase electric vehicles, achieving
          a 98% accuracy
        </p>
        <p>
          • Performed data cleaning and feature engineering to improve model
          performance and correct errors
        </p>
      </div>
    </div>
  );
};

export default ProjectList;
