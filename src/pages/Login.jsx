import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import "./SignInUp.css";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input
                type="text"
                name=""
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name=""
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="button-form">
              <button
                id="submit"
                href="/#"
                onClick={handleClick}
                disabled={isFetching}
              >
                Submit
              </button>

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

export default Login;
