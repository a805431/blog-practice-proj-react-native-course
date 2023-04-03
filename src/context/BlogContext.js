import React, { useReducer } from 'react';

const BlogContext = React.createContext();

//the state contains the blogPosts
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

//children is a prop from the props object
export const BlogProvider = ({ children }) => {
  //the blogPosts are the state
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
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
