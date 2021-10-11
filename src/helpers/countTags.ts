import { off } from "process";

export const countTags = (articles) => {
  console.log(articles);
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
      console.log(tag)
    tagCountList.push({ text: tag, value: count[tag] });
  }

  console.log(tagCountList);
  return tagCountList; 
};
