require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        collectionTypes: [
          `article`,
          `article-category`,
          `drill`,
          `drill-category`,
          `ropes-course-activity`,
          `chapter`,
          `chapter-category`,
          `history`,
        ],
        singleTypes: [
          `global`,
          `home-page`,
          `about-page`,
          `coaches-page`,
          `articles-page`,
          `drills-page`,
          `technical-skills-page`,
          `gallery-page`,
          `forms-page`,
          `scholarships-page`,
          `history-page`,
        ],
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "drills",

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: "speed",

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
        {
          allStrapiDrill {
            edges {
              node {
                id
                name
                tags {
                  name
                  id
                }
                summary
                isTeam
                isIndividual
                isGroup
                description
                competency
                category {
                  name
                }
                time_estimate
              }
            }
          }
        }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: "id",

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ["name", "competency", "category", "tags", "groupTypes"],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: [
          "name",
          "competency",
          "category",
          "tags",
          "groupTypes",
          "time_estimate",
          "isGroup",
          "isIndividual",
          "isTeam",
          "description",
        ],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) => {
          return data.allStrapiDrill.edges.map((drill) => {
            const item = drill.node;
            const {
              id,
              name,
              competency,
              isGroup,
              isIndividual,
              isTeam,
              time_estimate,
              description,
            } = item;
            const groupTypes = [];

            if (isGroup) groupTypes.push("Group");
            if (isIndividual) groupTypes.push("Individual");
            if (isTeam) groupTypes.push("Team");

            return {
              id,
              name,
              competency,
              groupTypes,
              time_estimate,
              isGroup,
              isIndividual,
              isTeam,
              description,
              category: item.category.name,
              tags: item.tags.map((tag) => {
                return tag.name;
              }),
            };
          });
        },
      },
    },
  ],
};
