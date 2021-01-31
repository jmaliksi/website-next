import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../styles/index.module.css"


class CharacterSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showImg: true, page: 0};
    this.pages = 2;
    this.stats = [];
    React.Children.forEach(props.children, c => {
      this.stats.push(c.props.children);
    });
  }

  figure() {
    return (
      <figure>
        <img src="https://jmaliksitest.files.wordpress.com/2021/01/a0a37a8d-3390-46b9-83f2-9b520987c568_1_105_c.jpeg"/>
        <figcaption>
          pfp by <a href="https://twitter.com/ouroborose">Rose Peng</a>
        </figcaption>
      </figure>
    );
  }

  renderStats() {
    return (
      <ul>
      {this.stats.map(stat => {return <li key={stat}>{stat}</li>})}
      </ul>
    );
  }

  showStats = () => {
    this.setState({showImg: false});
  }

  hideStats = () => {
    this.setState({showImg: true});
  }

  render = () => {
    return (
      <div className={styles.characterSheet} onMouseEnter={this.showStats} onMouseLeave={this.hideStats}>
        {this.state.showImg ? this.figure() : this.renderStats()}
      </div>
    );
  }
}

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
      <CharacterSheet>
        <li>wrangling: +2</li>
        <li>creativity: +1</li>
        <li>programming: +3</li>
        <li>jokes: +3</li>
        <li>impulse control: -1</li>
        <li>lawyer: -1</li>
        <li>napping: -2</li>
        <li>relaxing: +2</li>
        <li>balance: +1</li>
        <li>speaking: -1</li>
        <li>quietness: -1</li>
        <li>crafting: +2</li>
        <li>friend shape: +2</li>
        <li>cooking: +1</li>
        <li>executive function: -2</li>
        <li>computers: -0</li>
      </CharacterSheet>
      <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} className={styles.about}/>
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
