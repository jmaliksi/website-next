import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <center>
      <div style={{padding: `50px`}}>
        <h1>oh no</h1>
        <h2>this page is a ghost</h2>
        <Link to="/">home</Link>
      </div>
    </center>
  </Layout>
)
