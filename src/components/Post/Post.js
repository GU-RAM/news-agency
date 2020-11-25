import React from 'react';

const Post = ({ newses }) => {
  return (
    <>
      <ul>
        {newses.map(({ id, title, body }) => {
          return (
            <li key={id}>
              <h1>{title}</h1>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Post;
