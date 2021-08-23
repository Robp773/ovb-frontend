import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { Typography } from "@material-ui/core";

const LeaderShipPage = ({ data }) => {
  console.log(data);
  const seo = { title: "Store" };

  return (
    <Layout>
      <SEO seo={seo} />
      <div>LEADERSHIP</div>
    </Layout>
  );
};

// export const notePageQuery = graphql`
//   query LeaderShipPageQuery {
//     strapiLeaderShipPage {
//       id
//       content
//       title
//     }
//   }
// `;

export default LeaderShipPage;
