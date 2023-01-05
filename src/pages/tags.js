import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import setupTags from "../utils/setupTags";

function Tags({ data }) {
  const tags = setupTags(data.allContentfulRecipe.nodes);

  const content = tags.map((tag, i) => {
    const [tagName, tagCount] = tag;

    return (
      <Link key={i} to={`/${tagName}`} className="tag">
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

export default Tags;
