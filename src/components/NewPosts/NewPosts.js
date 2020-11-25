import React from 'react';
import styled from 'styled-components';

const NewPosts = ({ newses }) => {
  return (
    <>
      <SectionNewPosts>
        <Ul>
          {newses.map(({ id, title, body }) => {
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
        <PagerButton>Pager</PagerButton>
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
      background-color: #f44336;
      padding: 5px;

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
