import { graphql, Link } from "gatsby";
import React from "react";
import slugify from "slugify";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import setupTags from "../utils/setupTags";

function Tags({ data }) {
  const tags = setupTags(data.allContentfulRecipe.nodes);

  const content = tags.map((tag, i) => {
    const [tagName, tagCount] = tag;
    const tagSlug = slugify(tagName, { lower: true });

    return (
      <Link key={i} to={`/tags/${tagSlug}`} className="tag">
        <h5>{tagName}</h5>
        <p>{tagCount} recipe</p>
      </Link>
    );
  });

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">{content}</section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export function Head() {
  return <SEO title="Tags" />;
}

export default Tags;
