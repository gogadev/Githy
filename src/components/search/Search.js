import React, { useState, useContext } from "react";

import styled from "styled-components";

import { MdSearch } from "react-icons/md";

import { GithubContext } from "../../context/context";

const Search = () => {
  const [user, setUser] = useState("");
  const { requests, error, searchGithubUser, loading } = useContext(
    GithubContext
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };

  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="enter github user"
            />
            {requests > 0 && !loading && <button type="submit">Search</button>}
          </div>
        </form>
        <h3>requests: {requests} / 60</h3>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0.6rem 0.5rem;
      background: var(--clr-white);
      border-top-right-radius: 13px;
      border-bottom-left-radius: 13px;
    }
  }
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    padding: 0.5rem;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;

    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
      text-align: center;
      outline-width: 0;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: lightgrey;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
      color: darkslategrey;
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }
    svg {
      color: var(--clr-grey-7);
    }
    input,
    button,
    svg {
      font-size: 1.1rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.9rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-7);
    font-weight: 400;
  }
`;

const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;

export default Search;
