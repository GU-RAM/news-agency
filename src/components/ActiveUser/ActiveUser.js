import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { SharedContext } from '../../hoc/Context/Context';

const postCountByUserId = {};
let max = 0;
let topUser = '';

const ActiveUser = () => {
  const { newses, users } = useContext(SharedContext);
  const [activeUser, setActiveUSer] = useState({
    name: '',
    email: '',
    numberOfPosts: '',
  });

  useEffect(() => {
    for (const post of newses) {
      if (postCountByUserId.hasOwnProperty(post.userId)) {
        postCountByUserId[post.userId] += 1;
      } else {
        postCountByUserId[post.userId] = 1;
      }
      if (postCountByUserId[post.userId] >= max) {
        max = postCountByUserId[post.userId];
        topUser = post.userId;
      }
    }

    const person = users.find(user => user.id === topUser);
    person &&
      setActiveUSer({
        name: person.name,
        email: person.email,
        numberOfPosts: max,
      });
  }, [users]);

  return (
    <TopUserWrapper>
      <div>Name: {activeUser.name}</div>
      <div>Email: {activeUser.email}</div>
      <div>Number of post: {activeUser.numberOfPosts}</div>
      <h1>Top Users With The Most Posts</h1>
    </TopUserWrapper>
  );
};

export default ActiveUser;

const TopUserWrapper = styled.div`
  padding: 30px;
  margin: 10px;
  background-color: grey;
  @media only screen and (min-width: 768px) {
    & {
      margin: 10px 20px;
    }
  }
  @media only screen and (min-width: 1200px) {
    & {
      margin: 10px 40px;
    }
  }
  & h1 {
    height: calc(100% - 70px);
    display: flex;
    align-items: center;
    text-align: center;
  }
`;
