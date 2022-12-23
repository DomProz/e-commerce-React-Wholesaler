import React from "react";
import "./SignInUp.css";
import styled from "styled-components";

import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
`;
const SignUp = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
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
            </div>
          </form>
        </div>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
