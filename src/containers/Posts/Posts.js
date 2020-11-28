import React, { useState, useEffect, createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import NewPosts from '../../components/NewPosts/NewPosts';
import SinglePost from '../../components/NewPosts/PostsList/SinglePost/SinglePost';

export const newsContext = createContext();

const Posts = () => {
  // const [newses, setNewses] = useState([]);

  // const getPosts = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       'https://jsonplaceholder.typicode.com/posts'
  //     );
  //     return data;
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // useEffect(() => {
  //   getPosts().then(data => {
  //     setNewses(data);
  //   });
  // }, []);

  return (
    <>
      {/* <newsContext.Provider value={newses}> */}
      <Switch>
        <Route path='/posts/:id' component={SinglePost} />
        <Route path='/' component={NewPosts} />
      </Switch>
      {/* </newsContext.Provider> */}
    </>
  );
};

export default Posts;
