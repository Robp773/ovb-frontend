import { Divider, Typography } from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import PageWrapper from "../../../components/shared/content-wrapper";
import CategoryHeading from "../../../components/shared/category-heading";
import ContentHeading from "../../../components/shared/content-heading";
import { RelatedContentWrapper } from "../../../components/shared/related-content-list";

const DrillCategoryPage = ({ data, location }) => {
  const categoryData = data.strapiDrillCategory;
  const { allStrapiDrill: drills } = data;
  
  return (
    <Layout>
      <PageWrapper>
        <ContentHeading
          image={categoryData.image.localFile.childImageSharp.fixed}
          title={categoryData.name}
          iconWithText={false}
          contentType="drills"
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

        <Divider style={{ margin: "20px 0" }} />

        <Typography style={{ textAlign: "center", margin: "10px 0" }} variant="h4">
          Drills
        </Typography>
        <RelatedContentWrapper xs={6} contentType="drill" items={drills} />
      </PageWrapper>
    </Layout >
  );
};

export const query = graphql`
  query($category__name: String!) {
    strapiDrillCategory(name: { eq: $category__name }) {
      description
      name
      image {
        localFile {
          childImageSharp {
            fixed(width: 300, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

    allStrapiDrill(filter: {category: {name: {eq: $category__name}}}) {
      edges {
        node {
          category {
            name
          }
          name
          description
          category {
            name
          }
          tags {
            name
          }
          main_media {
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

export default DrillCategoryPage;
