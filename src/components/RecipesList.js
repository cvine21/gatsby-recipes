import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

function RecipesList({ recipes = [] }) {
  const content = recipes.map((recipe) => (
    <View key={recipe.id} recipe={recipe} />
  ));

  return <div className="recipes-list">{content}</div>;
}

function View({ recipe }) {
  const { title, prepTime, cookTime, image } = recipe;
  const imgPath = getImage(image);

  return (
    <Link to={`/${title}`} className="recipe">
      <GatsbyImage image={imgPath} className="recipe-img" alt={title} />
      <h5>{title}</h5>
      <p>
        Prep: {prepTime} min | Cook: {cookTime} min
      </p>
    </Link>
  );
}

export default RecipesList;
