import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SharedContext } from '../../../hoc/Context/Context';
// import { newsContext } from '../../../containers/Posts/Posts';
import PostsAuth from './PostsAuth/PostsAuth';
import './PostsList.css';

const PostsList = ({ numberOfPosts }) => {
  const { newses, users } = useContext(SharedContext);
  // const newses = useContext(newsContext);

  return (
    <>
      <Ul>
        {newses &&
          newses.slice(0, numberOfPosts).map(({ id, title, body, userId }) => {
            return (
              <li key={id}>
                <div className='body'>
                  <h1>{title}</h1>
                  <p>{body}</p>
                </div>
                <div className='btn-wrapper'>
                  <Link className='link' to={`/posts/${id}`}>
                    Read More
                  </Link>
                  <Link className='link' to={'/Author'}>
                    user/
                    <PostsAuth users={users} userId={userId} />
                  </Link>
                </div>
              </li>
            );
          })}
      </Ul>
    </>
  );
};

export default PostsList;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: ${props =>
    `repeat(${Math.ceil(parseInt(props.children.length) / 3)}, 1fr)`};
  grid-gap: 50px;
  font-size: 14px;
  margin-bottom: 90px;
  padding-left: 0;
  @media only screen and (min-width: 568px) {
    & {
      grid-template-columns: 1fr;
    }
  }
  @media only screen and (min-width: 900px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (min-width: 1200px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }

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
  }
`;
