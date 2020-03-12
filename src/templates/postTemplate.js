import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from '../components/seo'

const Post = ({ pageContext: { data } }) => {
  let { createdAt, updatedAt } = data
  
  let created = new Date(createdAt)
  let updated = new Date(updatedAt)

  const options = { year: 'numeric', month: 'long', day: 'numeric' }


  return (
    <Layout>
      <SEO title={data.title}/>
      <Link to="/">Go back</Link>
      
      <h1>{ data.title }</h1>
      <article dangerouslySetInnerHTML={{ __html: data.content.html }}></article>
      <span>{
        updated > created ? updated.toLocaleDateString('en-EN', options) : created.toLocaleDateString('en-EN', options)
      }</span>
    </Layout>
  )
}

export default Post
