import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import slugify from "slugify";

function RecipesList({ recipes = [] }) {
  const content = recipes.map((recipe) => (
    <View key={recipe.id} recipe={recipe} />
  ));

  return <div className="recipes-list">{content}</div>;
}

function View({ recipe }) {
  const { title, prepTime, cookTime, image } = recipe;
  const imgPath = getImage(image);
  const slug = slugify(title, { lower: true });

  return (
    <Link to={`/${slug}`} className="recipe">
      <GatsbyImage image={imgPath} className="recipe-img" alt={title} />
      <h5>{title}</h5>
      <p>
        Prep: {prepTime} min | Cook: {cookTime} min
      </p>
    </Link>
  );
}

export default RecipesList;
