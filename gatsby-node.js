const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  const {
    data: {
      allContentfulRecipe: { nodes: recipes },
    },
  } = result;

  recipes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      createPage({
        path: `/${tag}`,
        component: path.resolve("src/templates/tag-template.js"),
        context: { tag: tag },
      });
    });
  });
};
