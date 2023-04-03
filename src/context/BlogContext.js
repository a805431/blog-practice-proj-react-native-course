import React, { useState} from 'react';

const BlogContext = React.createContext();

//children is a prop from the props object
export const BlogProvider = ({ children }) => {
  const blogPosts = [{ title: 'Blog Post #1' }, { title: 'Blog Post #2' }];

  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

//BlogContext is a context object and such objects have a provider.
//This provider is going to contain data and provide it to the components in our app

export default BlogContext;
