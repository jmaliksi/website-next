import React from "react"
import { Link } from "gatsby"
import styles from "./sidebar.module.css"

function SidebarEntry(props) {
  const { slug, title } = props.post;
  // TODO figure out anchors
  return (
    <li>
      <Link to={`/writing/#${slug}`}>{title}</Link>
    </li>
  );
}

function Sidebar(props){
  return(
    <div className={styles.sidebar}>
      <ul>
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
