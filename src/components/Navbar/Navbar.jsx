import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Modal } from "../../components";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleModal, setToggleModal] = React.useState(false);

  const switchToggleModal = (e) => {
    e.preventDefault();
    setToggleModal(true);
  };

  return (
    <nav className="app__navbar">
      {toggleModal ? <Modal setToggleModal={setToggleModal} /> : null}
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="bar logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {!toggleModal ? (
        <div className="app__navbar-login">
          <a
            href="#login"
            className="p__opensans"
            onClick={(e) => {
              switchToggleModal(e);
            }}
          >
            Log In / Register
          </a>
          <div />
          <a
            href="/"
            className="p__opensans"
            onClick={(e) => {
              switchToggleModal(e);
            }}
          >
            Book Table
          </a>
        </div>
      ) : null}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          cursor={"pointer"}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            {" "}
            <MdClose
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a
                  href="#home"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#about"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#menu"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Menu
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#awards"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Awards
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#contact"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
