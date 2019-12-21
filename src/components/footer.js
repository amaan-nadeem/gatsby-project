import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <div>
      <p>
        This page is Created By {data.site.siteMetadata.author}
      </p>
  </div>
}

export default Footer;