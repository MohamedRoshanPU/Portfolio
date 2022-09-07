import React from "react";
import "../Styles/Banner.scss";
import arrow from "../Images/arrow.svg";

function Banner() {
  return (
    <div className="Banner">
      <div className="banner-container">
        <div className="image"></div>
        <div className="scroll">
          <img src={arrow} alt="" />
        </div>
        <div className="name">
          <h2>HI, IAm Roshan</h2>
        </div>
        <div className="heading">
          <h3>
            I Design and Build beautiful <span>Websites</span>
          </h3>
        </div>
        <div className="description">
          <p>
            Iam a Frontend Developer and an UI/UX Designer with morethan one and
            half years of experience in UI/UX Designing. Iam a Fresher Frontend
            Developer seeking job opportunities..
          </p>
        </div>
        <div className="btn">
          <a href="tel:+919605373040">
            <button>Hire Me</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
