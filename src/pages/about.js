import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>Here is {data.site.siteMetadata.author} A Mern Stack Developer!</p>
      <p>
        Need A Developer? <Link>Contact Info</Link>
      </p>
    </Layout>
  )
}

export default About
