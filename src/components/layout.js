import React from "react"
import Header from "./header"

function Content({children}) {
  return <div style={{ marginTop: `50px` }}>{children}</div>;
}

export default ({highlight, children}) => (
  <div>
    <Header highlight={highlight} />
    <Content>{children}</Content>
  </div>
)
