import React from 'react';

const PostsAuth = ({ users, userId }) => {
  return (
    <>
      {users
        .filter(user => user.id === userId)
        .map(users => {
          return <span>{users.name}</span>;
        })}
    </>
  );
};

export default PostsAuth;
