import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import RecipesList from "./RecipesList";
import TagsList from "./TagsList";

const query = graphql`
  query {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

function AllRecipes() {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query);

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
}

export default AllRecipes;
