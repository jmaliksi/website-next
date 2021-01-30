import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"
import RNG from "rng"

function HomeLink(props) {
  return (
    <div className={styles.homeLink}>
      <Link to="/">joe maliksi</Link>
    </div>
  );
}

function HeaderLink(props) {
  const { to, name, highlight } = props;

  let className = styles.navLink;
  if (highlight != null && highlight.toLowerCase() === name.toLowerCase()) {
    className = styles.activeNavLink;
  }
  return <Link to={to} className={className} key={name}>{fafo(name)}</Link>;
}

function Divider() {
  return <span>&nbsp;|&nbsp;</span>
}

function fafo(word) {
  // this isn't seeding properly due to string not converting to unique int
  let rand = new RNG.MT(word);
  let inc = 0;
  return Array.prototype.map.call(word, c => {
    inc++;
    return <span style={{position: "relative", top: `${rand.random() * .1}em`, fontSize: `${rand.random() * .3 + .85}em`}} key={inc}>{c}</span>;
  });
}

class HeaderTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.title = props.title;
  }

  render() {
    return (
      <div className={styles.headerTitle}>
        <h1>{fafo("joe maliksi")}</h1>
      </div>
    );
  }
}

export default (props) => (
  <div className={styles.navbar}>
    <HeaderTitle title={props.title}/>
    <div className={styles.navContainer}>
      <div className={styles.navigation}>
        <HeaderLink to="/" name="about" highlight={props.highlight} />
        <Divider />
        <HeaderLink to="/code" name="projects" highlight={props.highlight} />
        <Divider />
        <HeaderLink to="/writing" name="writing" highlight={props.highlight} />
      </div>
    </div>
  </div>
)
