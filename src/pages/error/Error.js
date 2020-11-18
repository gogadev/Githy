import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import errorImg from "../../assets/error.jpg";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={errorImg} alt="Error Page" />
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-white);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;

export default Error;
