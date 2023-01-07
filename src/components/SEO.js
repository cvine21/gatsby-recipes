import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

function SEO({ title, description }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query);

  return (
    <>
      <title>{title || siteMetadata.title} | Simply Recipes</title>
      <meta
        name="description"
        content={description || siteMetadata.description}
      />
    </>
  );
}

export default SEO;
