import React, { useContext } from "react";

import styled from "styled-components";

import { GithubContext } from "../../context/context";

const Followers = () => {
  const { followers } = useContext(GithubContext);

  return (
    <Wrapper>
      <div className="followers">
        {followers.map((follower, index) => {
          const { avatar_url: img, login } = follower;
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4>{login}</h4>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  margin-top: 1.5rem;
  position: relative;
  padding: 0 2rem;
  border-top-right-radius: 33px;
  border-bottom-left-radius: 33px;
  &::before {
    content: "followers";
    position: absolute;
    top: 0;
    left: 0%;
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
  .followers {
    overflow-y: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(65px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 0.2rem;
  }

  .followers::-webkit-scrollbar {
    width: 5px;
  }

  .followers::-webkit-scrollbar-track {
    background: lightgrey;
  }

  .followers::-webkit-scrollbar-thumb {
    background: grey;
  }
  article {
    transition: var(--transition);
    padding: 0.1rem 0.1rem;
    display: grid;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 45px;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 0rem;
    }
    h4 {
      transform: translateY(-2.6rem);
      margin-left: 3.5rem;
      color: var(--clr-grey-8);
      font-weight: 100;
      font-style: italic;
      text-align: left;
    }
  }
`;

export default Followers;
