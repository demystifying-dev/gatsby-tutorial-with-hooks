import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const [theTitle] = useState(data.site.siteMetadata.title)
  return (
    <Layout>
      <h1>About {theTitle}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the best
        photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
