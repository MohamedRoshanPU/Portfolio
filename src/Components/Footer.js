import React from "react";
import "../Styles/Footer.scss";
import whatsapp from "../Images/whatsapp.svg";
import linkedin from "../Images/linkedin.svg";
import insta from "../Images/insta.svg";
import git from "../Images/git.svg";
import behance from "../Images/behance.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footer-card">
          <div className="left">
            <h5>Lets Talk!</h5>
            <p>Connect with me...</p>
          </div>
          <div className="right">
            <a href="tel:+919605373040">
              <button className="btn">Hire Me</button>
            </a>
          </div>
        </div>
        <div className="footer">
          <p>Check me on</p>
          <div className="socials">
            <div className="social">
              <a
                href="https://www.instagram.com/_.roshn/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <img src={insta} alt="Instagram" />
              </a>
            </div>
            <div className="social">
              <a href="https://wa.me/919605373040" target="_blank" rel="noreferrer">
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/mohamed-roshan-p-u-027384200/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
            <div className="social">
              <a href="https://github.com/MohamedRoshanPU" target="_blank" rel="noreferrer">
                <img src={git} alt="Git Hub" />
              </a>
            </div>
            <div className="social">
              <a href="https://www.behance.net/roshan2" target="_blank" rel="noreferrer">
                <img src={behance} alt="Behance" />
              </a>
            </div>
          </div>
          <div className="credit">
            <h4>
              DESIGN & DEVELOPED BY <span>R</span>N
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
