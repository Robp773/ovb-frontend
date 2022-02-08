
export const countTags = (articles) => {
  const count = {};
  articles.edges.map((article) => {
    article.node.tags.map((tag) => {
      if (count[tag.name]) {
        count[tag.name]++;
      } else {
        count[tag.name] = 1;
      }
    });
  });

  let tagCountList = [];
  for (let tag in count) {
    tagCountList.push({ text: tag, value: count[tag] });
  }

  return tagCountList; 
};
