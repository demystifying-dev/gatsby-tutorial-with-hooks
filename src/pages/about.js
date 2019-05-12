import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => {
  return (
    <Layout>
      <Header
        headerText="About Gatsby"
      >
      </Header>
      <Header headerText="Reuse is pretty cool" />
      <p>Such wow. Very React.</p>
    </Layout>
  )
}
