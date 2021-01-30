import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import styles from "../styles/code.module.css"

function CodeSummary({ node }) {
  const { title, slug, content, jetpack_featured_media_url } = node;
  return (
    <div id={slug} className={styles.summaryCard}>
      <div className={styles.titleRow}>
        <div className={styles.thumb}>
          <img className={styles.thumbImg} alt={slug} src={jetpack_featured_media_url} />
        </div>
        <h1 className={styles.summaryTitle}>{title}</h1>
      </div>
      <div className={styles.summaryBody}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

export default ({ data }) => {
  return (
    <Layout highlight="projects">
      <div className={styles.projects}>{
        data.allWordpressPost.nodes.map(node => (
          <CodeSummary node={node} key={node.slug} />
        ))
      }</div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "code"}}}}, sort: {fields: date, order: DESC}) {
      nodes {
        title
        slug
        content
        tags {
          name
        }
        jetpack_featured_media_url
      }
    }
  }
`
