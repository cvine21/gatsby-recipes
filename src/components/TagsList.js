import { Link } from "gatsby";
import React from "react";
import slugify from "slugify";
import setupTags from "../utils/setupTags";

function TagsList({ recipes }) {
  const tags = setupTags(recipes);

  const content = tags.map((tag, i) => {
    const [tagName, tagCount] = tag;
    const tagSlug = slugify(tagName, { lower: true });

    return (
      <Link key={i} to={`/tags/${tagSlug}`}>
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
