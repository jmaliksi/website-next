import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../styles/index.module.css"

function ContactInfo() {
  return (
    <div>
      <h2>contact</h2>
      <div className={styles.contactSection}>
        <div className={styles.contactLabel}>come talk</div>
        <div className={styles.contactInfo}>
          <ul>
            <li>joe [dot] maliksi [at] gmail [dot] com</li>
          </ul>
        </div>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contactLabel}>or just stalk</div>
        <div className={styles.contactInfo}>
          <ul>
            <li><a href="https://twitter.com/ch00beh">Twitter</a></li>
            <li><a href="http://www.linkedin.com/pub/joseph-maliksi/35/b/903">LinkedIn</a></li>
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
