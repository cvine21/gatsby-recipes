import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { BsClock, BsClockHistory, BsPeople } from "react-icons/bs";

import Layout from "../components/Layout";

function RecipeTemplate({ data }) {
  const {
    contentfulRecipe: {
      title,
      cookTime,
      prepTime,
      servings,
      content: { ingredients, instructions, tags, tools },
      description: { description },
      image,
    },
  } = data;
  const imgPath = getImage(image);

  const tagsList = tags.map((tag, i) => (
    <Link key={i} to={`/${tag}`}>
      {tag}
    </Link>
  ));

  const instructionsList = instructions.map((item, i) => (
    <div key={i} className="single-instruction">
      <header>
        <p>step {i + 1}</p>
        <div></div>
      </header>
      <p>{item}</p>
    </div>
  ));

  const ingredientsList = ingredients.map((item, i) => (
    <p key={i} className="single-ingredient">
      {item}
    </p>
  ));

  const toolsList = tools.map((item, i) => (
    <p key={i} className="single-tool">
      {item}
    </p>
  ));

  return (
    <Layout>
      <main className="page">
        <div className="revipe-page">
          <section className="recipe-hero">
            <GatsbyImage image={imgPath} alt={title} className="about-img" />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>serving</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags:
                {tagsList}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructionsList}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredientsList}
              </div>
              <div>
                <h4>tools</h4>
                {toolsList}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      prepTime
      servings
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default RecipeTemplate;
