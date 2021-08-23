import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { Typography } from "@material-ui/core";

const AboutPage = ({ data }) => {
  console.log(data);
  const seo = { title: "About" };

  return (
    <Layout>
      <SEO seo={seo} />
      <Typography variant="h3">{data.strapiAboutPage.title}</Typography>
      <Typography
        dangerouslySetInnerHTML={{ __html: data.strapiAboutPage.content }}
      />
    </Layout>
  );
};

export const notePageQuery = graphql`
  query AboutPageQuery {
    strapiAboutPage {
      id
      content
      title
    }
  }
`;

export default AboutPage;
