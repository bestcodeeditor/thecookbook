import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="About Us">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      The Cookbook is a unique lifestyle network, website and magazine that
      connects viewers to the power and joy of food. The network strives to be
      viewers' best friend in food and is committed to leading by teaching,
      inspiring, empowering and entertaining through its talent and expertise
    </p>
  </Layout>
)

export default AboutPage
