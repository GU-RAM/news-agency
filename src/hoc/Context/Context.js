import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = props => {
  const [newses, setNewses] = useState([]);

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

  useEffect(() => {
    getPosts().then(data => {
      setNewses(prevNewses => [...prevNewses, ...data]);
    });
  }, []);

  return (
    <NewsContext.Provider value={[newses, setNewses]}>
      {props.children}
    </NewsContext.Provider>
  );
};
