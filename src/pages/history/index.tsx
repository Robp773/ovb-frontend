import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "../../components/seo";
import ContentWrapper from "../../components/shared/content-wrapper";
import { Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import StaticPageNoImageHeading from "../../components/static-page/static-page-no-image-heading";
import { RelatedContentWrapper } from "../../components/shared/related-content-list";

const HistoryListPage = ({ data }) => {
  const seo = { title: "History" };
  const strapiHistoryPage = data.strapiHistoryPage;
  const histories = data.allStrapiHistory.edges;

  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper width="85ch">
        <StaticPageNoImageHeading title={strapiHistoryPage.page_title} />
        <Typography
          style={{
            marginTop: "10px",
          }}
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: strapiHistoryPage.page_content,
          }}
        />
        <Divider style={{ margin: "20px 0" }} />

        <RelatedContentWrapper
          contentType="histories"
          isHomePage={false}
          items={histories}
        />
      </ContentWrapper>
    </Layout>
  );
};

export const historyListPageQuery = graphql`
  query {
    allStrapiHistory {
      edges {
        node {
          title
          description
          main_image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  height: 750
                  width: 1000
                  transformOptions: { fit: FILL, cropFocus: CENTER }
                )
              }
            }
          }
        }
      }
    }
    strapiHistoryPage {
      page_title
      page_content
    }
  }
`;

export default HistoryListPage;
