import {
  Box,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import PageWrapper from "../../components/shared/content-wrapper";
import { GatsbyImage } from "gatsby-plugin-image";
import { styled } from '@mui/material/styles';
import { RelatedContentWrapper } from "../../components/shared/related-content-list";

const HeadingTitle = styled(Typography)(({ theme }) => ({
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  textAlign: "center",
  width: "fit-content",
  margin: "auto",
}));

const ArticlesPage = (data) => {

  return (
    <Layout>
      <PageWrapper width="100ch">
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <HeadingTitle variant="h3">Articles</HeadingTitle>
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
          </Box>
        </Container>
        <Divider style={{ margin: "20px 0" }} />

        <Typography
          style={{ textAlign: "center" }}
          variant="h4"
        >
          Topics
        </Typography>

        <RelatedContentWrapper isHomePage={false} contentType="articleTopics" items={data.data.allStrapiArticleCategory} />

      </PageWrapper>
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
                  height: 200,
                  width: 300,
                  transformOptions: {fit: FILL,  cropFocus: CENTER}
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
