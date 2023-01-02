import { Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "~/components/layout";
import ContentWrapper from "../../../components/shared/content-wrapper";
import ContentHeading from "../../../components/shared/content-heading";
import { RelatedContentWrapper } from "../../../components/shared/related-content-list";

const CustomArticle = ({ data, location }) => {
  const categoryData = data.strapiArticleCategory;
  const { allStrapiArticle: articles } = data;

  return (
    <Layout>
      <ContentWrapper>
        <ContentHeading
          image={
            categoryData.main_media.localFile.childImageSharp.gatsbyImageData
          }
          title={categoryData.name}
          iconWithText={false}
          contentType="article"
          metaData={{
            pathname: location.pathname,
            category: categoryData.name,
            date: null,
            tags: [],
          }}
        />

        <Typography
          style={{ marginTop: "20px" }}
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: categoryData.description,
          }}
        />

        <Divider style={{ margin: "20px 0" }} />

        <Typography style={{ textAlign: "center" }} variant="h4">
          Articles
        </Typography>
        <RelatedContentWrapper contentType="articles" items={articles} />
      </ContentWrapper>
    </Layout>
  );
};

export const query = graphql`
  query ($category__name: String!) {
    strapiArticleCategory(name: { eq: $category__name }) {
      name
      description
      main_media {
        localFile {
          childImageSharp {
            gatsbyImageData(
              height: 300
              width: 450
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
        }
      }
    }
    allStrapiArticle(filter: { category: { name: { eq: $category__name } } }) {
      edges {
        node {
          strapiId
          ropes_course_activities {
            content
            created_at
            title
          }
          content
          category {
            name
          }
          created_at
          date(formatString: "MMMM Do YYYY")
          title
          description
          tags {
            name
          }
          main_media {
            alternativeText
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
  }
`;

export default CustomArticle;
