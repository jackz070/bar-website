import React from "react";

import { images } from "../../constants";
import { GiCutDiamond } from "react-icons/gi";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center"></div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__opensans">About Us</h1>
        <GiCutDiamond className="diamond__icon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Learn More
        </button>
      </div>
      <div className="app__aboutus-drink flex__center">
        <img src={images.drink} alt="drink image" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__opensans">Our History</h1>
        <GiCutDiamond className="diamond__icon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
