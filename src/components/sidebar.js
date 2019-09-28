import React from "react"
import styles from "./sidebar.module.css"

function SidebarEntry(props) {
  const { slug, title } = props.post;
  return (
    <li>
      <a href={`#${slug}`} className={styles.sidebarLink}>{title}</a>
    </li>
  );
}

function Sidebar(props){
  return(
    <div>
      <div className={styles.sidebar}>
        <ul className={styles.sidebarList}>
          {
            props.data.map(post => (
              <SidebarEntry post={post} key={post.slug} />
            ))
          }
        </ul>
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

export default Sidebar
