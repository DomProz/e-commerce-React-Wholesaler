import React from "react";
import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" />
          <label>Password</label>
        </div>
        <div className="button-form">
          <a id="submit" href="/#">
            Submit
          </a>
          <div id="register">
            Don't have an account ?<a href="/#">Register</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Navbar2;
