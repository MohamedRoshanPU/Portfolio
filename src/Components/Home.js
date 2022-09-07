import React from "react";
import "../Styles/Home.scss";
import Banner from "./Banner";
import Services from "./Services";
import Skills from "./Skills";
import Works from "./Works";

function Home() {
  return (
    <div className="Home">
      <Banner />
      <Services />
      <Works />
      <Skills />
    </div>
  );
}

export default Home;
