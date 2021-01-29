import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

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
  return <Link to={to} className={className}>{name}</Link>;
}

function Divider() {
  return <span>&nbsp;|&nbsp;</span>
}

export default (props) => (
  <div className={styles.navbar}>
    <div className={styles.navContainer}>
      <HomeLink />
      <div className={styles.navigation}>
        <HeaderLink to="/#about" name="about" highlight={props.highlight} />
        <Divider />
        <HeaderLink to="/code" name="code" highlight={props.highlight} />
        <Divider />
        <HeaderLink to="/writing" name="words" highlight={props.highlight} />
      </div>
    </div>
  </div>
)
