import React from "react"
import { graphql } from "gatsby"
import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import styles from "../styles/writing.module.css"
import { WritingEntry } from "../components/writing-components.js"

export default ({data}) => {
  return (
    <Layout highlight="Writing">
      <Sidebar data={data.allWordpressPost.nodes}>
        <div className={styles.excerpts}>{
          data.allWordpressPost.nodes.map(node => (
            <WritingEntry node={node} key={node.slug} />
          ))
        }</div>
      </Sidebar>
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
