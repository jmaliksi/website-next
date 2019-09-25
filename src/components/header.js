import React from "react"
import { Link } from "gatsby"

function HeaderLink(props) {
  const { to, name, highlight } = props;

  if (highlight === name) {
    // TODO styling
    return <Link to={to} style={{ color: `green` }}>{name}</Link>;
  }
  return <Link to={to}>{name}</Link>;
}

export default (props) => (
  <div>
    <Link to="/">Joe Maliksi</Link>
    <HeaderLink to="/#about" name="About" highlight={props.highlight} />
    <HeaderLink to="/art" name="Art" highlight={props.highlight} />
    <HeaderLink to="/code" name="Code" highlight={props.highlight} />
    <HeaderLink to="/writing" name="Words" highlight={props.highlight} />
  </div>
)
