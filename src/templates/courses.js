import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
    }
  }
`

const Blog = (props) => {
  console.log(props);
  return (
    <Layout>
        <h1>{props.data.contentfulPost.title}</h1>
    </Layout>
  )
}

export default Blog;