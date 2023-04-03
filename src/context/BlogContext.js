import React, { useState } from 'react';

const BlogContext = React.createContext();

//children is a prop from the props object
export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

//BlogContext is a context object and such objects have a provider.
//This provider is going to contain data and provide it to the components in our app

export default BlogContext;
