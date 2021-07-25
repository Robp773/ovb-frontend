import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"

const IndexPage = ({data}) => {

  const seo = { title: "Categories" }
  return (
    <Layout>
      <SEO seo={seo} />
      <div>index page</div>
    </Layout>
  )
}

export default IndexPage
