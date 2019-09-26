import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Sidebar from "../components/sidebar"

function Title({children}) {
  return <h1>{children}</h1>;
}

function WritingEntry(props) {
  const { title, slug, excerpt, tags } = props.node;

  return (
    <div>
      <Title>{title}</Title>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  );
}

export default ({data}) => {
  return (
    <div>
      <Header highlight="Words" />
      <Sidebar data={data.allWordpressPost.nodes} />
      {
        data.allWordpressPost.nodes.map(node => (
          <WritingEntry node={node} key={node.slug} />
        ))
      }
    </div>
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
