import React, { useState } from 'react';
import styled from 'styled-components';

const NewPosts = ({ newses }) => {
  const [numberOfPosts, setNumberOfPosts] = useState(6);

  const displayMorePostsHandler = () => {
    setNumberOfPosts(prevNumberOfPosts => numberOfPosts + 3);
  };

  return (
    <>
      <SectionNewPosts>
        <Ul>
          {newses.slice(0, numberOfPosts).map(({ id, title, body }) => {
            return (
              <li key={id}>
                <div className='body'>
                  <h1>{title}</h1>
                  <p>{body}</p>
                </div>
                <div className='btn-wrapper'>
                  <button>Read More</button>
                  <button>User Info/User name</button>
                </div>
              </li>
            );
          })}
        </Ul>
        <PagerButton onClick={displayMorePostsHandler}>Pager</PagerButton>
      </SectionNewPosts>
    </>
  );
};

export default NewPosts;

const SectionNewPosts = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #a3bcf0;
  border: 2px solid #000;
  padding: 50px;
  margin: 10px;
  width: 70%;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: ${props =>
    `repeat(${Math.ceil(parseInt(props.children.length) / 3)}, 1fr)`};
  grid-gap: 50px;
  font-size: 14px;
  margin-bottom: 90px;

  & li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fdf8f5;
    padding: 10px;
    border: 2px solid #ebcebf;
    box-shadow: 0 0 8px #000;

    &:hover {
      box-shadow: 0 0 17px #555;
    }
    & h1 {
      font-size: 1.5em;
    }

    & .btn-wrapper {
      display: flex;
      justify-content: space-between;
    }

    & button {
      color: #fff;
      cursor: pointer;
      background: #f44336;
      padding: 5px;
      transition-duration: 0.2s;

      &:hover,
      &:focus {
        box-shadow: 0 0.5em 0.5em -0.4em #000;
        transform: translateY(-0.25em);
      }

      &:nth-child(2) {
        background: #008cba;
      }
    }
  }
`;

const PagerButton = styled.button`
  padding: 10px;
  font-size: 1.5em;
  margin: 0 50px;
  cursor: pointer;
`;
