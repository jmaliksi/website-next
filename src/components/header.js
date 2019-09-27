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
  if (highlight === name) {
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
        <HeaderLink to="/#about" name="About" highlight={props.highlight} />
        <Divider />
        <HeaderLink to="/art" name="Art" highlight={props.highlight} />
        <Divider />
        <HeaderLink to="/code" name="Code" highlight={props.highlight} />
        <Divider />
        <HeaderLink to="/writing" name="Words" highlight={props.highlight} />
      </div>
    </div>
  </div>
)
