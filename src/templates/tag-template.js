import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

function TagTemplate({ data, pageContext: { tag } }) {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = data;

  return (
    <Layout>
      <main className="page">
        <h2>{tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ($tag: String) {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        cookTime
        prepTime
        id
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export function Head({ pageContext }) {
  return <SEO title={pageContext.tag} />;
}

export default TagTemplate;
