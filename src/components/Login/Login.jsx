import React from "react";

import "./Login.css";

const Login = () => {
  const [login, setLogin] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setLogin((current) => [
      ...current,
      {
        login: e.target[0].value,
        password: e.target[1].value,
      },
    ]);
  };

  return (
    <div className="app__booking app__login">
      <div>
        <form
          onSubmit={handleSubmit}
          className="app__booking-form app__login-form"
        >
          <label for="login" className="app__booking-label">
            Login
          </label>
          <input type="text" name="login" />

          <label className="app__booking-label">Password </label>
          <input type="text" name="password" />

          <input
            type="submit"
            value="Login"
            className="app__booking-button custom__button"
          />
        </form>
      </div>
      <div>
        <ul>
          {login.map((login) => (
            <li>
              {login.name} {login.password}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Login;
