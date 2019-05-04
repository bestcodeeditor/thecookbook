const path = require("path")

const { slugify } = require("./src/util/utility")
const authors = require("./src/util/authors")
const _ = require("lodash")

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

  // Page templates
  const templates = {
    eachPost: path.resolve("./src/templates/singlePost.js"),
    tagPage: path.resolve("./src/templates/tagsPage.js"),
    tagPosts: path.resolve("./src/templates/tagPost.js"),
    postList: path.resolve("./src/templates/post-list.js"),
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
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
        component: templates.eachPost,
        context: {
          slug: post.fields.slug,
          imageUrl: authors.find(x => x.name === post.frontmatter.author)
            .imageUrl,
        },
      })
    })
    // Get all tags
    let tags = []
    _.each(posts, edge => {
      tags = tags.concat(edge.frontmatter.tags)
    })

    let tagPostCounts = {} // { tutorial: 2, design: 1}
    tags.forEach(tag => {
      // Or 0 cause it might not exist yet
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    // Remove duplicates
    tags = _.uniq(tags)

    // Tags page (all tags)
    createPage({
      path: "/tags",
      component: templates.tagPage,
      context: {
        tags,
        tagPostCounts,
      },
    })

    //create Tag posts pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPosts,
        context: {
          tag,
        },
      })
    })

    const postsPerPage = 2
    const numberOfPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      if (isFirstPage) return
      createPage({
        path: `/page/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage,
          numberOfPages,
        },
      })
    })
  })
}
