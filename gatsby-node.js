const path = require("path")

exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        path: require.resolve("path-browserify"),
      },
      fallback: {
        fs: false,
      },
    },
  })
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allStrapiNote {
        edges {
          node {
            id
            category
            ropes_course_activities {
              content
              published_at
              tags {
                name
              }
              title
            }
            title
            content
            main_media {
              localFile {
                childImageSharp {
                  fluid {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                  }
                }
              }
              caption
            }
          }
        }
      }
    }
  `)
  data.allStrapiNote.edges.forEach(note => {
    // const slug = edge.node.fields.slug
    console.log(`/${note.node.category}/${note.node.id}`)
    actions.createPage({
      path: `/${note.node.category}/${note.node.id}`,
      component: require.resolve(`./src/templates/note.tsx`),
      // context: { slug: slug },
    })
  })
}