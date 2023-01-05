function setupTags(recipes) {
  const allTags = {};

  recipes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      allTags[tag] = (allTags?.[tag] || 0) + 1;
    });
  });

  const tagsMap = Object.entries(allTags).sort((a, b) => {
    const [first] = a;
    const [second] = b;

    return first.localeCompare(second);
  });

  return tagsMap;
}

export default setupTags;
