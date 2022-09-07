import React from "react";
import "../Styles/Skills.scss";
import ai from '../Images/ai.svg'
import ps from '../Images/ps.svg'
import css from '../Images/css.svg'
import figma from '../Images/figma.svg'
import xd from '../Images/xd.svg'
import html from '../Images/html.svg'
import jquery from '../Images/jquery.svg'
import js from '../Images/js.svg'
import react from '../Images/React.svg'

function Skills() {
  return (
    <div className="Skills">
      <div className="skills-container">
        <div className="skills-heading">
          <h3>
            My <span>Skills</span>
          </h3>
        </div>
        <div className="skill-card-wrapper">
          <div className="skill-card html">
            <img src={html} alt="html" />
            <h4>HTML 5</h4>
          </div>
          <div className="skill-card css">
            <img src={css} alt="css" />
            <h4>CSS 3</h4>
          </div>
          <div className="skill-card javascript">
            <img src={js} alt="javascript" />
            <h4>JAVASCRIPT</h4>
          </div>
          <div className="skill-card jquery">
            <img src={jquery} alt="jquery" />
            <h4>JQuery</h4>
          </div>
          <div className="skill-card react">
            <img src={react} alt="React JS" />
            <h4>REACT JS</h4>
          </div>
          <div className="skill-card xd">
            <img src={xd} alt="Adobe XD" />
            <h4>Adobe XD</h4>
          </div>
          <div className="skill-card figma">
            <img src={figma} alt="figma" />
            <h4>FIGMA</h4>
          </div>
          <div className="skill-card ps">
            <img src={ps} alt="Photoshop" />
            <h4>PHOTOSHOP</h4>
          </div>
          <div className="skill-card ai">
            <img src={ai} alt="illustrator" />
            <h4>ILLUSTRATOR</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
