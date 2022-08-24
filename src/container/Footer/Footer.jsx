import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";

import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <p className="subtitle__opensans app__footer-headtext">Contact Us</p>
        <p className="p__opensans">373 Marszalkowska St, Warsaw, Poland </p>

        <p className="p__opensans">Phone +48 655 34 43 </p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="The Neon Bar links_logo" />
        <p className="p__opensans">See you in the morning!</p>
        <div className="app__footer-links_icons">
          <FiFacebook /> <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <div className="app__wrapper-content">
          <p className="subtitle__opensans app__footer-headtext">
            Opening hours
          </p>
          <p className="p__opensans">Sunday - Thursday:</p>
          <p className="p__opensans">12:00 - 02:00 </p>
          <p className="p__opensans">Friday - Saturday: </p>
          <p className="p__opensans">12:00 - 05:00 </p>
        </div>
      </div>
    </div>
    <div className="app__footer-copyright">
      <p className="p__opensans">2022 The Neon Bar. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
