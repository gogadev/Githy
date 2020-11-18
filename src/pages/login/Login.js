import React from "react";

import styled from "styled-components";

import user from "../../assets/user.htm";

import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <img src={user} alt="Githy User" />
      <h1>Githy</h1>
      <button className="btn" onClick={loginWithRedirect}>
        Log In / Sign Up
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    width: 30%;
    margin-bottom: 0.2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

export default Login;
