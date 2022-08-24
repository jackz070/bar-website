import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuItem">
    <div className="app__menuItem-head">
      <div className="app__menuItem-name">
        <p className="p__opensans" style={{ color: "var(--color-white)" }}>
          {title}
        </p>
      </div>
      <div className="app__menuItem-dash" />
      <div className="app__menuItem-price">
        <p className="p__opensans" style={{ color: "var(--color-crimson)" }}>
          {price}
        </p>
      </div>
    </div>
    <div className="app__menuItem-sub">
      <p className="p__opensans" style={{ color: "var(--color-grey)" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
