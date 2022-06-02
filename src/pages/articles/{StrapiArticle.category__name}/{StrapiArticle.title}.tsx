import { Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import ContentHeading from "../../../components/shared/content-heading";
import ContentWrapper from "../../../components/shared/content-wrapper";

const CustomArticle = ({ data, location }) => {
  const seo = { title: data.strapiArticle.title };

  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper>
        <ContentHeading
          image={
            data.strapiArticle.main_media.localFile.childImageSharp
              .gatsbyImageData
          }
          title={data.strapiArticle.title}
          contentType="article"
          iconWithText={true}
          metaData={{
            pathname: location.pathname,
            tags: data.strapiArticle.tags,
            category: data.strapiArticle.category.name,
            date: data.strapiArticle.date,
          }}
        />
        <Divider style={{ margin: "20px 0" }} />
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: data.strapiArticle.content,
          }}
        />
      </ContentWrapper>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      category {
        name
      }
      content
      date(formatString: "MMMM Do, YYYY")
      description
      main_media {
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
      tags {
        name
      }
    }
  }
`;

export default CustomArticle;
