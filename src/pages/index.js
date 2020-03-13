import React from "react"
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from "../components/layout"


const path = require('path')

const IndexPage = ({ data: {
  allSitePage: {
    edges
  }
} }) => (
  <Layout>
    <SEO title="Home" />
    { edges.map(page => {

      const { id, title, content } = page.node.context.data
      const { path } = page.node
      const contentTEXT = content.text.length < 30 ? content.text : `${content.text.slice(0,30)}...`
      return (
        <Link to={path} key={id}>
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: contentTEXT}}></p>
        </Link>
      )
    }) }
  </Layout>
)

export const allPagesQuery = graphql`
{
  allSitePage(
    filter: { componentChunkName: { eq: "component---src-templates-post-template-js" }}
    sort: {
    fields: [context___data___updatedAt]
    order: DESC
  }
    
  ) {
    edges {
      node {
        id
        path
        component
        context {
          data {
            id
            title
            content {
              html
              text
            }
          }
        }
      }
    }
  }
}
`;

export default IndexPage
