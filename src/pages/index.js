import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import { HomeHeader, Banner } from "../util"
import PaginationLinks from "../components/PaginationLinks"
import img from "../images/home.jpg"

const IndexPage = () => {
  const postsPerPage = 2
  let numberOfPages

  return (
    <>
      <HomeHeader img={img}>
        <Banner
          title="The Cookbook"
          subtitle="Get free recipies & cook by yourself"
        />
      </HomeHeader>
      <Layout pageTitle="Find  recipes for speedy weeknight dinners, quick and easy meals, kid-pleasing snacks and desserts, and more!">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <StaticQuery
          query={Blogquery}
          render={data => {
            numberOfPages = Math.ceil(
              data.allMarkdownRemark.totalCount / postsPerPage
            )
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post
                    key={node.id}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    slug={node.fields.slug}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    tags={node.frontmatter.tags}
                  />
                ))}
                <PaginationLinks
                  currentPage={1}
                  numberOfPages={numberOfPages}
                />
              </div>
            )
          }}
        />
      </Layout>
    </>
  )
}

const Blogquery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }

      limit: 2
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: " MMMM Do  YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
