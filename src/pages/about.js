import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

function About({ data }) {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = data;

  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in bowl"
            placeholder="blurred"
            className="about-img"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export function Head() {
  return <SEO title="About" />;
}

export default About;
