import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { Typography } from "@material-ui/core";
import PageWrapper from "../../../components/page-wrapper";

const AboutPage = ({ data }) => {
  console.log(data);
  const seo = { title: "About" };

  return (
    <Layout>
      <SEO seo={seo} />
      <PageWrapper>
        <Typography variant="h3">{data.strapiAboutPage.title}</Typography>
        <Typography
          dangerouslySetInnerHTML={{ __html: data.strapiAboutPage.content }}
        />
      </PageWrapper>
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
