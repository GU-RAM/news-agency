import React, { useState } from 'react';
import styled from 'styled-components';
import PostsList from './PostsList/PostsList';

const NewPosts = props => {
  const [numberOfPosts, setNumberOfPosts] = useState(6);

  const displayMorePostsHandler = () => {
    setNumberOfPosts(prevNumberOfPosts => prevNumberOfPosts + 3);
  };
  return (
    <>
      <SectionNewPosts>
        <PostsList numberOfPosts={numberOfPosts} />
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

const PagerButton = styled.button`
  padding: 10px;
  font-size: 1.5em;
  margin: 0 50px;
  cursor: pointer;
`;
