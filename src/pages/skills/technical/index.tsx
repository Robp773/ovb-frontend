import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { Typography } from "@material-ui/core";

const TechnicalPage = ({ data }) => {
  console.log(data);
  const seo = { title: "Store" };

  return (
    <Layout>
      <SEO seo={seo} />
      <div>Technical</div>
    </Layout>
  );
};

// export const notePageQuery = graphql`
//   query TechnicalPageQuery {
//     strapiTechnicalPage {
//       id
//       content
//       title
//     }
//   }
// `;

export default TechnicalPage;
