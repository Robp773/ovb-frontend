import { Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "~/components/Layout";
import ContentWrapper from "../../components/shared/content-wrapper";
import { RelatedContentWrapper } from "../../components/shared/related-content-list";
import StaticPageNoImageHeading from "../../components/static-page/static-page-no-image-heading";

const ArticlesPage = (data) => {
  return (
    <Layout>
      <ContentWrapper width="100ch">
        <StaticPageNoImageHeading title="Articles" />
        <Typography
          style={{
            maxWidth: "85ch",
            margin: "10px auto",
          }}
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: data.data.strapiArticlesPage.description,
          }}
        />
        <Divider style={{ margin: "20px 0" }} />

        <Typography style={{ textAlign: "center" }} variant="h4">
          Topics
        </Typography>

        <RelatedContentWrapper
          isHomePage={false}
          contentType="articleTopics"
          items={data.data.allStrapiArticleCategory}
        />
      </ContentWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allStrapiArticleCategory {
      edges {
        node {
          name
          one_sentence_description
          main_media {
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
          description
        }
      }
    }
    strapiArticlesPage {
      description
    }
  }
`;

export default ArticlesPage;
