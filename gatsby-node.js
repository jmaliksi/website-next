const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const writingGroup = path.resolve("src/templates/writing-group.js");

  const writingResult = await graphql(`
    query {
      allWordpressTag {
        nodes {
          slug
        }
      }
    }
  `);

  const entries = writingResult.data.allWordpressTag.nodes;
  entries.forEach((entry) => {
    actions.createPage({
      path: `writing/${entry.slug}`,
      component: writingGroup,
      context: {
        slug: entry.slug
      }
    });
  });
}
