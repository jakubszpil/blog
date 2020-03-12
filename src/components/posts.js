import React from 'react';
import {StaticQuery, graphql} from 'gatsby';


const Content = () => {
  return (
    <StaticQuery 
      query={
        graphql`
          query {
            blog {
              posts {
                id
                title
                content {
                  html
                  text
                }
                image {
                  fileName
                  url
                }
              }
            }
          }`
      }
      render={({blog: { posts }}) => {
        return posts.map(item => (
          <div></div>
        ))
      }}
    />
  );
};

const Posts = () => {
  return (
    <div></div>
  );
};

export default Posts;