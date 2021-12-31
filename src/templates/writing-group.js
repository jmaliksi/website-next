import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../styles/writing.module.css"
import { WritingEntry } from "../components/writing-components.js"
import { Helmet } from "react-helmet"
import ReactHtmlParser from "react-html-parser"

export default ({data, pageContext}) => {
  const nodes = data.allWordpressPost.nodes;
  const excerpt = `${ReactHtmlParser(nodes[0]?.excerpt)[0].props.children[0]}...` || pageContext.tagName;
  return (
    <Layout highlight="Writing" title={`Reading: ${pageContext.tagName}`}>
      <Helmet>
        <meta property="og:title" content={pageContext.tagName}/>
        <meta property="twitter:title" content={pageContext.tagName}/>
        <meta property="description" content={excerpt}/>
        <meta property="og:description" content={excerpt}/>
        <meta property="twitter:description" content={excerpt}/>
      </Helmet>
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
