import { Typography } from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import PageWrapper from "../../../components/shared/content-wrapper";
import CategoryHeading from "../../../components/shared/category-heading";
import ContentHeading from "../../../components/shared/content-heading";
import { RelatedContentWrapper } from "../../../components/shared/related-content-list";

const CustomArticle = ({ data }) => {
  const categoryData = data.strapiArticleCategory;
  console.log(data);
  const { allStrapiArticle: articles } = data;

  return (
    <Layout>
      <PageWrapper>
        <ContentHeading
          image={categoryData.main_media.localFile.childImageSharp.fluid}
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
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: categoryData.description,
          }}
        />
        <Typography style={{textAlign: "center"}} variant="h4">Articles</Typography>
        <RelatedContentWrapper xs={6} items={articles} />
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
            fluid(maxWidth: 400, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
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
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default CustomArticle;
