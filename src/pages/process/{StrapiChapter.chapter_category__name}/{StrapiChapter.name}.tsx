import TocIcon from '@mui/icons-material/Toc';
import {
  Button, Divider, Drawer, Typography
} from "@mui/material";
import { graphql } from "gatsby";
import React, { useState } from "react";
import VerticalLinearStepper from "../../../components/chapter/toc";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import ContentHeading from "../../../components/shared/content-heading";
import PageWrapper from "../../../components/shared/content-wrapper";

const ChapterPage = ({ data: { strapiChapter: chapter, allStrapiChapter: { edges: allRelatedChapters } }, location }) => {

  const [drawerOpen, setDrawerOpen] = useState(false)
  const seo = { title: chapter.name };

  return (
    <Layout>
      <SEO seo={seo} />

      <Button variant="contained" style={{ position: "fixed", margin: "5px" }} onClick={() => setDrawerOpen(true)}>
        <TocIcon />
      </Button>

      <Drawer onClick={() => setDrawerOpen(false)} open={drawerOpen}>
        <VerticalLinearStepper activeChapter={chapter.name} isInDrawer chapters={allRelatedChapters} />
      </Drawer>
      <PageWrapper>

        <ContentHeading
          title={chapter.name}
          contentType="chapter"
          image={chapter.main_media.localFile.childImageSharp.gatsbyImageData}
          metaData={{
            pathname: location.pathname,
            date: null,
            tags: chapter.tags,
            category: chapter.chapter_category.name
          }}
        />
        <Divider style={{ margin: "20px 0" }} />

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: chapter.content,
          }}
        />
      </PageWrapper>
    </Layout>
  );
};

export const query = graphql`
query($id: String!, $chapter_category__name: String!) {
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
        filter: {chapter_category: {name: {eq: $chapter_category__name}}}
        sort: {order: ASC, fields: order}
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
