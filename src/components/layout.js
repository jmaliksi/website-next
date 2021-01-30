import React from "react"
import Header from "./header"
import styles from "./layout.module.css"

function Content({children}) {
  return <div className={styles.content}>{children}</div>;
}

function Footer() {
  return (
    <div className={styles.footer}>
      © Joseph Maliksi 2019–{new Date().getFullYear()}
    </div>
  );
}

export default ({highlight, children, title}) => (
  <div>
    <Header highlight={highlight} title={title} />
    <Content>{children}</Content>
    <Footer />
  </div>
)
