const path = require("path")
const { slugify } = require("./src/util/utility")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    const posts = res.data.allMarkdownRemark.edges.map(({ node }) => node)

    posts.forEach(post => {
      createPage({
        path: post.fields.slug,
        component: path.resolve("./src/templates/singlePost.js"),
        context: {
          slug: post.fields.slug,
        },
      })
    })
  })
}
