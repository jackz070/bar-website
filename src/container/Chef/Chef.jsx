import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__chef app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="a person" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Our Lead Barperson's Word" />
      <h1 className="headtext__opensans">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quotation mark" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            illo impedit veritatis voluptatem molestiae minima? Nam perferendis
            consequatur hic numquam officia consequuntur.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sunt!
        </p>
      </div>

      <div className="app__chef-sign">
        <p className="p__opensans">Kevin Lna</p>
        <p className="p__opensans">Lead Barperson & Founder</p>
        <img src={images.sign} alt="Signature" />
      </div>
    </div>
  </div>
);

export default Chef;
