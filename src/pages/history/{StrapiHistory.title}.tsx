import { Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentHeading from "../../components/shared/content-heading";
import ContentWrapper from "../../components/shared/content-wrapper";

const HistoryPage = ({ data, location }) => {
  const history = data.strapiHistory;
  const seo = { title: history.title };

  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper>
        <ContentHeading
          title={history.title}
          contentType="histories"
          image={history.main_image.localFile.childImageSharp.gatsbyImageData}
          metaData={{
            pathname: location.pathname,
            date: null,
            tags: [],
            category: null,
          }}
        />

        <Divider style={{ marginBottom: "20px" }} />

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: history.content }}
        />
      </ContentWrapper>
    </Layout>
  );
};

export const historyPageQuery = graphql`
  query ($id: String!) {
    strapiHistory(id: { eq: $id }) {
      description
      content
      title
      main_image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              height: 300
              width: 450
              transformOptions: { fit: FILL }
            )
          }
        }
      }
    }
  }
`;

export default HistoryPage;
