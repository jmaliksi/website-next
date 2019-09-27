import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

function HomeLink(props) {
  return (
    <div class={styles.homeLink}>
      <Link to="/">Joe Maliksi</Link>
    </div>
  );
}

function HeaderLink(props) {
  const { to, name, highlight } = props;

  if (highlight === name) {
    return <Link to={to} class={styles.activeNavLink}>{name}</Link>;
  }
  return <Link to={to} class={styles.navLink}>{name}</Link>;
}

export default (props) => (
  <div class={styles.navbar}>
    <HomeLink />
    <div class={styles.navigation}>
      <HeaderLink to="/#about" name="About" highlight={props.highlight} />
      <HeaderLink to="/art" name="Art" highlight={props.highlight} />
      <HeaderLink to="/code" name="Code" highlight={props.highlight} />
      <HeaderLink to="/writing" name="Words" highlight={props.highlight} />
    </div>
  </div>
)
