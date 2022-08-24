import React from "react";

import RotateLoader from "react-spinners/RotateLoader";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  const [sending, setSending] = React.useState(false);
  const [message, setMessage] = React.useState(null);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(e.target[0].value)) {
      setMessage("Please enter valid email");
    } else {
      setMessage("Subscribed!");
    }
    console.log(e.target[0].value);
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="newsletter" />
        <h1 className="headtext__opensans">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">Never miss latest news from The Neon Bar!</p>
      </div>

      <form
        className="app__newsletter-input flex__center"
        onSubmit={(e) => {
          handleNewsletterSubmit(e);
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your e-mail address"
        ></input>
        <p className="p__opensans" style={{ height: "32px" }}>
          {message}
        </p>
        <button
          type="submit"
          className="custom__button"
          onClick={() => {
            setSending(true);
            setTimeout(() => {
              setSending(false);
            }, 1000);
          }}
        >
          {sending ? "Loading..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
