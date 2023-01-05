import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

function RecipesList({ recipes = [] }) {
  const content = recipes.map((recipe) => <View recipe={recipe} />);

  return <div className="recipes-list">{content}</div>;
}

function View({ recipe }) {
  const { id, title, prepTime, cookTime, image } = recipe;
  const imgPath = getImage(image);

  return (
    <Link key={id} to={`/${title}`} className="recipe">
      <GatsbyImage image={imgPath} className="recipe-img" alt={title} />
      <h5>{title}</h5>
      <p>
        Prep: {prepTime} min | Cook: {cookTime} min
      </p>
    </Link>
  );
}

export default RecipesList;
