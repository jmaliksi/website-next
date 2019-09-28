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
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        {
          props.data.map(post => (
            <SidebarEntry post={post} key={post.slug} />
          ))
        }
      </ul>
    </div>
  );
}

export default Sidebar
