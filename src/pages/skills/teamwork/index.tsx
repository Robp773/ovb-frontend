import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { Typography } from "@material-ui/core";

const TeamworkPage = ({ data }) => {
  console.log(data);
  const seo = { title: "Store" };

  return (
    <Layout>
      <SEO seo={seo} />
      <div>Teamwork</div>
    </Layout>
  );
};

// export const notePageQuery = graphql`
//   query TeamworkPageQuery {
//     strapiTeamworkPage {
//       id
//       content
//       title
//     }
//   }
// `;

export default TeamworkPage;
