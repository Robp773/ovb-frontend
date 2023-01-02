import React from "react";
import TocIcon from "@mui/icons-material/Toc";
import { Button, Divider, Drawer, Typography } from "@mui/material";
import { graphql } from "gatsby";
import { useState } from "react";
import TableOfContents from "../../../components/chapter/TableOfContents";
import Layout from "../../../components/Layout";
import SEO from "../../../components/Seo";
import ContentHeading from "../../../components/shared/content-heading";
import PageWrapper from "../../../components/shared/content-wrapper";
import { StrapiChapterDataType } from "../../../../types/ProcessPage";

const ChapterPage = ({ data }: { data: StrapiChapterDataType }) => {
  const { allStrapiChapter, strapiChapter } = data;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const seo = { title: strapiChapter.name };

  return (
    <Layout>
      <SEO seo={seo} />

      <Button
        variant="contained"
        style={{ position: "fixed", margin: "5px" }}
        onClick={() => setDrawerOpen(true)}
      >
        <TocIcon />
      </Button>

      <Drawer onClick={() => setDrawerOpen(false)} open={drawerOpen}>
        <TableOfContents
          fullWidth={false}
          activeChapter={strapiChapter.name}
          isInDrawer
          allStrapiChapter={allStrapiChapter}
        />
      </Drawer>
      <PageWrapper>
        <ContentHeading
          title={strapiChapter.name}
          contentType="strapiChapter"
          image={
            strapiChapter.main_media.localFile.childImageSharp.gatsbyImageData
          }
          metaData={{
            pathname: location.pathname,
            date: null,
            tags: strapiChapter.tags,
            category: strapiChapter.chapter_category.name,
          }}
        />
        <Divider style={{ margin: "20px 0" }} />

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: strapiChapter.content,
          }}
        />
      </PageWrapper>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!, $chapter_category__name: String!) {
    strapiChapter(id: { eq: $id }) {
      content
      name
      order
      tags {
        name
      }
      chapter_category {
        name
      }
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

export default ChapterPage;
