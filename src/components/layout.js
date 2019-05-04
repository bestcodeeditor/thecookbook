import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/index.scss"
import Footer from "../components/Footer"

import { Row, Col } from "reactstrap"
import Sidebar from "./Sidebar"

//import "./layout.css"

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container" id="content">
          <h5 style={{ color: "#FFA500" }}>{pageTitle}</h5>
          <br />
          <Row>
            <Col md="8">{children}</Col>
            <Col md="4">
              <Sidebar author={postAuthor} authorFluid={authorImageFluid} />
            </Col>
          </Row>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
