import React, { useContext } from "react";

import styled from "styled-components";

import { MdLocationOn } from "react-icons/md";

import { GithubContext } from "../../context/context";

const Card = () => {
  const { githubUser } = useContext(GithubContext);

  const {
    avatar_url,
    html_url,
    name,
    bio,
    location,
    twitter_username,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || "dev"} </p>
        </div>
        <a href={html_url}>Follow</a>
      </header>
      <p className="bio">{bio || "~The Only Constant In Life Is Change.~"}</p>
      <div className="links">
        <p>
          <MdLocationOn />
          {location}
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  position: relative;
  margin-top: 1.5rem;
  border-top-right-radius: 33px;
  border-bottom-left-radius: 33px;

  &::before {
    content: "user";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
    border-top-left-radius: 13px;
    border-bottom-right-radius: 13px;
    border: 1px solid var(--clr-grey-8);
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;

    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      border-top-right-radius: 12px;
      border-bottom-left-radius: 12px;
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;

export default Card;
