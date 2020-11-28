import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SharedContext = createContext();

export const SharedContextComponent = props => {
  const [newses, setNewses] = useState([]);
  const [users, setUsers] = useState([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      return data;
    } catch (error) {
      alert(error);
    }
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      return data;
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getPosts().then(data => {
      setNewses(data);
    });
    getUsers().then(data => {
      setUsers(data);
    });
  }, []);

  const context = {
    newses,
    users,
  };

  return (
    <SharedContext.Provider value={context}>
      {props.children}
    </SharedContext.Provider>
  );
};
