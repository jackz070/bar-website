import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div
    className="app__wrapper section__padding"
    id="contact"
    style={{ background: "var(--color-black)" }}
  >
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__opensans" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">373 Marszalkowska St, Warsaw, Poland </p>
        <p className="subtitle__opensans">Opening hours</p>
        <p className="p__opensans">Sun. - Thu.: 12:00 - 02:00 </p>
        <p className="p__opensans">Fri. - Sat.: 12:00 - 05:00 </p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="drink photo" />
    </div>
  </div>
);

export default FindUs;
