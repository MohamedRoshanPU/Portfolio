import React from "react";
import "../Styles/Works.scss";
import { data } from "../Components/WorksData";
import { useState } from "react";

function Works() {
  // Work Categories
  const cats = ["All", "Design", "Development"];

  // States
  const [works, setWorks] = useState(data);
  const [filteredWorks, setFilteredWorks] = useState(works);
  const [categories, setCategories] = useState(cats);
  const [activeCat, setActiveCat] = useState("All");

  const filterWorks = (categories) => {
    setActiveCat(categories);
    let newData = works.filter((work) => {
      return work.cat === categories;
    });
    setFilteredWorks(newData);

    if (categories === "All") {
      setFilteredWorks(data);
    }
  };

  return (
    <div className="Works">
      <div className="works-container">
        <div className="works-heading">
          <h3>
            My <span>Works</span>
          </h3>
        </div>
        <div className="links-wrapper">
          {categories.map((cat, index) => {
            return (
              <li
                className={activeCat === cat ? "activeCat" : null}
                key={index}
                onClick={() => {
                  filterWorks(cat);
                }}
              >
                {cat}
              </li>
            );
          })}
        </div>
        <div className="works-wrapper">
          {filteredWorks.map((work) => {
            return (
              <div className="work-card" key={work.id}>
                <div className="work-image">
                  <img src={work.image} alt="works-image" />
                </div>
                <p className="domain">{work.domain}</p>
                <p className="desc">{work.description}</p>
                <a href={work.link} target="_blank">
                  <li className="button">
                    Check Now
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </li>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Works;
