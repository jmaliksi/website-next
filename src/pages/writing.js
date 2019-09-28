import React from "react"
import { graphql } from "gatsby"
import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import styles from "../styles/writing.module.css"

function Title({children}) {
  return <div className={styles.title}><h1>{children}</h1></div>;
}

function Tag(props) {
  const { name, slug } = props;
  // TODO figure out combined query params
  return (
    <a className={styles.tag} href={`?tag=${slug}`}>&nbsp;({name})&nbsp;</a>
  );
}

function WritingEntry(props) {
  const { title, excerpt, slug, tags } = props.node;

  let tagComponent = <div className={styles.tagContainer}>&nbsp;</div>;
  if (tags != null) {
    tagComponent = (
      <div className={styles.tagContainer}>{
        tags.map(tag => (
          <Tag slug={tag.slug} name={tag.name} key={tag.slug} />
        ))
      }</div>
    );
  }

  return (
    <div className={styles.writingEntry} id={slug}>
      <Title>{title}</Title>
      {tagComponent}
      <div className={styles.writingExcerpt} dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  );
}

export default ({data}) => {
  return (
    <Layout highlight="Words">
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
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "writing"}}}}) {
      nodes {
        title
        slug
        excerpt
        tags {
          name
          slug
        }
      }
    }
  }
`
