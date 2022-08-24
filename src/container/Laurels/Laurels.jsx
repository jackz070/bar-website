import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels-awards_card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels-awards_card_content">
      <p className="subtitle__opensans">{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div
    className="app__wrapper section__padding"
    style={{ backgroundColor: "var(--color-black)" }}
    id="awards"
  >
    <div className="app__wrapper-info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__opensans">Our Awards</h1>
      <div className="app__laurels-awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper-img app__laurels-img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
