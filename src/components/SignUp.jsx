import React from "react";
import "./SignInUp.css";

const SignUp = () => {
  return (
    <div className="login-box">
      <h2>Register</h2>
      <form>
        <div className="user-box">
          <input type="text" name="Name" />
          <label>Name</label>

          <input type="text" name="LastName" />
          <label>LastName</label>
        </div>
        <div className="user-box">
          <input type="text" name="Username" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="Password" />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input type="password" name="ConfirmPassword" />
          <label>Confirm Password</label>
        </div>
        <div className="button-form">
          <a id="submit" href="/#">
            Submit
          </a>
          <div id="register">
            Don't have an account ?<a href="/#"> Register</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
