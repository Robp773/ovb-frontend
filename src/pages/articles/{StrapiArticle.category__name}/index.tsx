import { Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import PageWrapper from "../../../components/shared/content-wrapper";
import ContentHeading from "../../../components/shared/content-heading";
import { RelatedContentWrapper } from "../../../components/shared/related-content-list";

const CustomArticle = ({ data, location }) => {
  const categoryData = data.strapiArticleCategory;
  const { allStrapiArticle: articles } = data;

  return (
    <Layout>
      <PageWrapper>
        <ContentHeading
          image={categoryData.main_media.localFile.childImageSharp.gatsbyImageData}
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

        <Typography style={{ textAlign: "center", margin: "10px 0" }} variant="h4">Articles</Typography>
        <RelatedContentWrapper contentType="articles" items={articles} />
      </PageWrapper>
    </Layout>
  );
};

export const query = graphql`
  query($category__name: String!) {
    strapiArticleCategory(name: { eq: $category__name }) {
      name
      description
      main_media {
        localFile {
          childImageSharp {
            gatsbyImageData(
              height: 250,
              width: 350
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
                  height: 200,
                  width: 300
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
