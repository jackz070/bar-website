import React from "react";
import "./Modal.css";

import Booking from "../Booking/Booking";
import Login from "../Login/Login";

const Modal = ({ setToggleModal }) => {
  return (
    <>
      <div
        className="app__modal-background_dark"
        onClick={() => {
          setToggleModal(false);
        }}
      />
      <div className="app__modal-centered">
        <div className="app__modal-modal">
          <div className="app__modal-header">
            <a href="#login" className="p__opensans">
              Log In / Register
            </a>
            <div />
            <a
              href="/"
              className="p__opensans"
              onClick={() => {
                setToggleModal(true);
              }}
            >
              Book Table
            </a>
          </div>
          <div className="app__modal-content">
            <Login />
            <div className="app__modal-separator"/>
            <Booking />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
