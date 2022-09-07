import React from "react";
import "../Styles/About.scss";
import image from "../Images/image.jpg";
import cv from '../Images/PDF/Mohamed Roshan PU.pdf'

function About() {
  return (
    <div className="About">
      <div className="about-container">
        <div className="image"></div>
        <div className="about-wrapper">
          <div className="about-me">
            <h3>
              <span>A</span>Bout Me
            </h3>
            <p>
              Hi, Iam Roshan, a passionate <span>Frontend Developer</span> &
              UI/UX Designer. i have more than one year of experience as a
              fulltime employee as well as an freelancer in{" "}
              <span>UI/UX Designing</span> . I had the oppurtunity to work with
              some awesome companies like Code and Hue Pvt. Ltd and Innerix
              Technologies. These experience has helped me to grow as a creative
              as well as a team player...
            </p>
            <a href={cv} download='MohamedRoshanPU.pdf'>
              <button>Download CV (.7 KB)</button>
            </a>
          </div>
          <div className="my-image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
