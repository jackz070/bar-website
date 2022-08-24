import React from "react";

import { GiCutDiamond } from "react-icons/gi";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__opensans">{title}</p>
    <GiCutDiamond className="diamond__icon" />
  </div>
);

export default SubHeading;
