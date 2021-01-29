import React from "react"
import { graphql } from "gatsby"
import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import styles from "../styles/writing.module.css"
import ReactHtmlParser from "react-html-parser"

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

class WritingEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.content = ReactHtmlParser(props.node.content); 
    this.slug = props.node.slug;
    this.title = props.node.title;
    this.tags = props.node.tags;

    this.excerpt = ReactHtmlParser(props.node.excerpt)[0].props.children[0];
  }

  toggle = () => {
    this.setState({expanded: !this.state.expanded});
  }

  tagComponent() {
    if (!this.tags) {
      return <div className={styles.tagContainer}>&nbsp;</div>;
    }
    return (
      <div className={styles.tagContainer}>{
        this.tags.map(tag => (
          <Tag slug={tag.slug} name={tag.name} key={tag.slug} />
        ))
      }</div>
    );
  }

  words() {
    if (this.state.expanded) {
      return this.content;
    }
    return this.excerpt;
  }

  render() {
    return (
      <div className={styles.writingEntry} id={this.slug}>
        <Title>{this.title}</Title>
        {this.tagComponent()}
        <div className={styles.writingExcerpt}>
          <p>{this.words()}</p>
          <a onClick={this.toggle}>{this.state.expanded ? 'less' : 'more'}</a>
        </div>
      </div>
    )
  }
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
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "writing"}}}}, sort: {fields: date, order: DESC}) {
      nodes {
        title
        slug
        excerpt
        content
        tags {
          name
          slug
        }
      }
    }
  }
`
