import React, { useState, useEffect, useContext } from 'react';
import { NewsContext } from '../../hoc/Context/Context';
import NewPosts from '../../components/NewPosts/NewPosts';

const Posts = () => {
  const [newses, setNewses] = useContext(NewsContext);

  return (
    <>
      <NewPosts newses={newses} />
    </>
  );
};

export default Posts;
