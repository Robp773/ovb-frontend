import React from "react";
import { Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import { ProcessPageDataType } from "../../../../types/ProcessPage";
import TableOfContents from "../../../components/chapter/TableOfContents";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentHeading from "../../../components/shared/content-heading";
import ContentWrapper from "../../../components/shared/content-wrapper";

const ChapterCategory = ({
  data,
  location,
}: {
  data: ProcessPageDataType;
  location: any;
}) => {
  const { strapiChapterCategory, allStrapiChapter } = data;

  const seo = { title: "Leadership Skills" };

  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper width="85ch">
        <ContentHeading
          image={
            strapiChapterCategory.main_media.localFile.childImageSharp
              .gatsbyImageData
          }
          title={strapiChapterCategory.name}
          iconWithText={false}
          contentType="chapter"
          metaData={{
            pathname: location.pathname,
            category: strapiChapterCategory.name,
            date: null,
            tags: [],
          }}
        />
        <Divider style={{ margin: "20px 0" }} />
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: strapiChapterCategory.content,
          }}
        />

        <Divider style={{ margin: "20px 0" }} />

        <TableOfContents fullWidth allStrapiChapter={allStrapiChapter} />
      </ContentWrapper>
    </Layout>
  );
};

export const ChapterCategoryQuery = graphql`
  query ($chapter_category__name: String!) {
    strapiChapterCategory(name: { eq: $chapter_category__name }) {
      content
      name
      main_media {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allStrapiChapter(
      filter: { chapter_category: { name: { eq: $chapter_category__name } } }
      sort: { order: ASC, fields: order }
    ) {
      edges {
        node {
          id
          order
          name
          description
          chapter_category {
            name
          }
        }
      }
    }
  }
`;

export default ChapterCategory;
