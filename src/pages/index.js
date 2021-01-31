import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../styles/index.module.css"

class Email extends React.Component {
  constructor(props) {
    super(props);
    const { name, domain } = props;
    this.displayToken = String.fromCharCode(65312);
    this.cleanEmail = `${name}@${domain}`;
    this.email = Array.prototype.map.call(
      `${name}${this.displayToken}${domain}`,
      c => {return c + String.fromCharCode(8291)}
    );
    this.state = {clean: false};
  }

  onMouseEnter = () => {
    this.setState({clean: true});
  }

  render() {
    if (!this.state.clean) {
      return <a
        href="mailto:gotcha@wobscale.lol');DROP TABLE emails;--"
        onMouseEnter={this.onMouseEnter}>{this.email}</a>;
    }
    return (
      <a href={`mailto:${this.cleanEmail}`}>{this.cleanEmail}</a>
    );
  }
}

function ContactInfo() {
  return (
    <div>
      <h2>contact</h2>
      <div className={styles.contactSection}>
        <div className={styles.contactLabel}>come talk</div>
        <div className={styles.contactInfo}>
          <ul>
            <li><Email name="joe" domain="wobscale.lol"></Email></li>
          </ul>
        </div>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contactLabel}>or just stalk</div>
        <div className={styles.contactInfo}>
          <ul>
            <li><a href="https://github.com/jmaliksi/">GitHub</a></li>
            <li><a href="http://www.linkedin.com/pub/joseph-maliksi/35/b/903">LinkedIn</a></li>
            <li><a href="https://twitter.com/ch00beh">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ({data}) => (
  <Layout highlight="About">
    <div className={styles.content}>
      <h1>hi</h1>
      <h2 id="about">about</h2>
      <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
      <ContactInfo />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    wordpressPage(slug: {eq: "about"}) {
      content
    }
  }
`
