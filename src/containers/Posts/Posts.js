import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { NewsContext } from '../../hoc/Context/Context';
import Post from '../../components/Post/Post';

const Posts = () => {
  const [newses, setNewses] = useContext(NewsContext);

  return (
    <>
      <Post newses={newses} />
    </>
  );
};

export default Posts;
