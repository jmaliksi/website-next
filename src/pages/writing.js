import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../styles/writing.module.css"
import { TagBar, WritingEntry } from "../components/writing-components.js"

export default ({data}) => {
  return (
    <Layout highlight="Writing">
      <div className={styles.excerpts}>
        <TagBar nodes={data.allWordpressPost.nodes} />
        {
          data.allWordpressPost.nodes.map(node => (
            <WritingEntry node={node} key={node.slug} />
          ))
        }
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "writing"}}}}, sort: {fields: date, order: DESC}) {
      nodes {
        title
        slug
        excerpt
        content
        date(formatString: "MMMM Do, YYYY")
        tags {
          name
          slug
        }
      }
    }
  }
`
