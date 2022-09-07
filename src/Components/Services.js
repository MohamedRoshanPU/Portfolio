import React from "react";
import "../Styles/Services.scss";
import code from "../Images/front-end.svg";
import design from "../Images/design.svg";

function Services() {
  return (
    <div className="Services">
      <div className="services-container">
        <div className="services-heading">
          <h3>
            MY <span>SERVICES</span>
          </h3>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="icon">
              <img src={design} alt="design" />
            </div>
            <div className="card-heading">
              <h4>UI / UX Designing</h4>
            </div>
            <div className="card-desc">
              <p>
                Designing high quality websites and mobile apps with usability
                in mind...
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={code} alt="coding" />
            </div>
            <div className="card-heading">
              <h4>Front-end</h4>
            </div>
            <div className="card-desc">
              <p>
                Building amazing and interactive websites with HTML, CSS,
                Javascript and React JS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
