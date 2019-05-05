import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { PageHeader, Banner } from "../util"
import aboutImage from "../images/banner1.jpg"

const AboutPage = () => (
  <>
    <PageHeader img={aboutImage}>
      <Banner
        title="The Cookbook"
        subtitle="A online receipe book inspires passionate ones towards tasty foods "
      />
    </PageHeader>
    <Layout pageTitle="About Us">
      <SEO title="About" keywords={[`cooking`, `chefs`, `food`]} />

      <p>
        The Cookbook is a unique lifestyle network, website and magazine that
        connects viewers to the power and joy of food. The network strives to be
        viewers' best friend in food and is committed to leading by teaching,
        inspiring, empowering and entertaining through its talent and expertise
      </p>
    </Layout>
  </>
)

export default AboutPage
