import slugify from "@sindresorhus/slugify";

export const attachContentTypes = (drills, activities) => {
  const combinedData = { drills, activities };
  for (const dataType in combinedData) {
    combinedData[dataType].map((data) => {
      data.url =
        dataType === "drills"
          ? `/drills/${slugify(data.category)}/${slugify(
            data.name
          )}`
          : `/activities/${slugify(data.title)}`;
    });
  }
  return combinedData;
};