import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import "./SignInUp.css";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
`;
const SignIn = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
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
                Don't have an account ?<a href="./SignUp"> Register</a>
              </div>
            </div>
          </form>
        </div>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
