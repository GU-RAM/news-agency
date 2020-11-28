import React, { useState, useContext, useEffect } from 'react';
import { SharedContext } from '../../../../hoc/Context/Context';
import { useParams } from 'react-router-dom';
import PostsAuth from '../PostsAuth/PostsAuth';

const SinglePost = () => {
  const { newses, users } = useContext(SharedContext);
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState([]);

  useEffect(() => {
    setSinglePost(newses.find(elem => elem.id === parseInt(id)));
  }, []);

  return (
    <>
      <div>
        <h1>{singlePost && singlePost.title}</h1>
        <p>{singlePost && singlePost.body}</p>
        <p>
          {singlePost && <PostsAuth users={users} userId={singlePost.userId} />}
        </p>
      </div>
    </>
  );
};

export default SinglePost;
