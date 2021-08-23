import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default function Note({ data }) {
  const post = data
  return (
    <Layout>
      <div>
        {/* <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        DIS A NOTE PAGE
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    strapiNote {
        id
        title
        category
        date
      }
  }
`