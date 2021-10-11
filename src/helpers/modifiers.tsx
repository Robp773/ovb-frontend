export const attachContentTypes = (drills, activities) => {
  const combinedData = { drills, activities };
  for (const dataType in combinedData) {
    combinedData[dataType].map((data) => {
      data.url =
        dataType === "drills"
          ? `/drills/${encodeStrForUrl(data.category)}/${encodeStrForUrl(
              data.name
            )}`
          : `/activities/${encodeStrForUrl(data.title)}`;
    });
  }
  return combinedData;
};
 
export const encodeStrForUrl = (val) => {
  return encodeURIComponent((val.replace(/ +/g, "-").replace(/_/g, "-").toLowerCase()));
};
