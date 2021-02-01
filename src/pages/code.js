import React from "react"
import Layout from "../components/layout"
import styles from "../styles/code.module.css"
import ReactHtmlParser from "react-html-parser"
import classnames from "classnames"

function CodeSummary({ node }) {
  const { title, slug, content, jetpack_featured_media_url, date } = node;
  return (
    <div id={slug} className={classnames(styles.summaryCard, "popCard")}>
      { jetpack_featured_media_url &&
        <div className={styles.thumb}>
          <img className={styles.thumbImg} alt={slug} src={jetpack_featured_media_url} />
        </div>
      }
      <div className={styles.titleRow}>
        <h1 className={styles.summaryTitle}>{ReactHtmlParser(title)}</h1>
        <h2 className={styles.summaryTitle + " " + styles.dateTitle}>c. {date}</h2>
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
        date(formatString: "YYYY")
        tags {
          name
        }
        jetpack_featured_media_url
      }
    }
  }
`
