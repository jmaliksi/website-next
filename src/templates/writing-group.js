import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../styles/writing.module.css"
import { WritingEntry } from "../components/writing-components.js"

export default ({data, pageContext}) => {
  const nodes = data.allWordpressPost.nodes;
  return (
    <Layout highlight="Writing" title={`Reading: ${pageContext.tagName}`}>
      <div className={styles.excerpts}>{
        nodes.map(node => (
          <WritingEntry node={node} key={node.slug} expanded />
        ))
      }</div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(
      filter: {
        categories: {
          elemMatch: {
            name: {
              eq: "writing"
            }
          }
        },
        tags: {
          elemMatch: {
            slug: {
              eq: $slug
            }
          }
        }
      },
      sort: {fields: date, order: ASC}
    ) {
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
