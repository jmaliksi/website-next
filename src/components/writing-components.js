import React from "react"
import styles from "../styles/writing.module.css"
import ReactHtmlParser from "react-html-parser"

export let Title = ({children}) => {
  return <div className={styles.title}><h1>{children}</h1></div>;
}

export let Tag = (props) => {
  const { name, slug } = props;
  // TODO figure out combined query params
  return (
    <a className={styles.tag} href={`/writing/${slug}`}>&nbsp;({name})&nbsp;</a>
  );
}

export class WritingEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.content = ReactHtmlParser(props.node.content); 
    this.slug = props.node.slug;
    this.title = props.node.title;
    this.tags = props.node.tags;
    this.date = props.node.date;

    this.excerpt = ReactHtmlParser(props.node.excerpt)[0].props.children[0];
  }

  toggle = () => {
    this.setState({expanded: !this.state.expanded});
  }

  tagComponent() {
    return (
      <div className={styles.tagContainer}>
        <p className={styles.date}>{this.date}</p>
        {this.tags &&
          this.tags.map(tag => (
            <Tag slug={tag.slug} name={tag.name} key={tag.slug} />
          ))
        }
      </div>
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
        <div>
          {this.tagComponent()}
          <Title>{this.title}</Title>
        </div>
        <div className={styles.writingExcerpt}>
          <p>{this.words()}</p>
          <a onClick={this.toggle} href={`#${this.slug}`}>
            {this.state.expanded ? 'less' : 'more'}
          </a>
        </div>
      </div>
    )
  }
}
