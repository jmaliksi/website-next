import React from "react"
import styles from "./sidebar.module.css"

function SidebarEntry(props) {
  const { slug, title, jetpack_featured_media_url } = props.post;
  return (
    <li>
      <a href={`#${slug}`} className={styles.sidebarLink}>
        <div>
          {title}
          {jetpack_featured_media_url &&
            <img alt={slug} src={jetpack_featured_media_url} className={styles.thumb}/>
          }
        </div>
      </a>
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
