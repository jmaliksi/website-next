import React from "react"
import { graphql } from "gatsby"
import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import styles from "../styles/writing.module.css"

function Title({children}) {
  return <h1>{children}</h1>;
}

function WritingEntry(props) {
  const { title, excerpt } = props.node;

  return (
    <div className={styles.writingEntry}>
      <Title>{title}</Title>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  );
}

export default ({data}) => {
  return (
    <Layout highlight="Words">
      <Sidebar data={data.allWordpressPost.nodes} />
      <div className={styles.excerpts}>{
        data.allWordpressPost.nodes.map(node => (
          <WritingEntry node={node} key={node.slug} />
        ))
      }</div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "writing"}}}}) {
      nodes {
        title
        slug
        excerpt
        tags {
          name
        }
      }
    }
  }
`
