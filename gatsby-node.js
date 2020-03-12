const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/templates/postTemplate.js');
  const postQuery = await graphql(`
  {
    blog {
      posts: postsConnection {
        edges {
          node {
            id
            title
            content {
              html
              text
            }
            image {
              url
              fileName
            }
            createdAt
            updatedAt
            path
          }
        }
      }
    }
  }  
  `);
  postQuery.data.blog.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: postTemplate,
      context: {
        data: node
      }
    })
  })
};