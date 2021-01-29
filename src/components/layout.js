import React from "react"
import Header from "./header"

function Content({children}) {
  return <div style={{ marginTop: `50px` }}>{children}</div>;
}

function Footer() {
  return (
    <div style={{ fontWeight: `100`, width: `100%`, textAlign: `center`, fontSize: `x-small` }}>
      © Joseph Maliksi 2019–{new Date().getFullYear()}
    </div>
  );
}

export default ({highlight, children}) => (
  <div>
    <Header highlight={highlight} />
    <Content>{children}</Content>
    <Footer />
  </div>
)
