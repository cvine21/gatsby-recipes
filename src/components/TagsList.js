import { Link } from "gatsby";
import React from "react";
import setupTags from "../utils/setupTags";

function TagsList({ recipes }) {
  const tags = setupTags(recipes);

  const content = tags.map((tag, i) => {
    const [tagName, tagCount] = tag;

    return (
      <Link key={i} to={`/${tagName}`}>
        {tagName} ({tagCount})
      </Link>
    );
  });

  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">{content}</div>
    </div>
  );
}

export default TagsList;
