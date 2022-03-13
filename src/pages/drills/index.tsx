import {
  Box,
  Container,
  Divider,
  Typography
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import ContentWrapper from "../../components/shared/content-wrapper";
import { RelatedContentWrapper } from "../../components/shared/related-content-list";

const HeadingTitle = styled(Typography)(({ theme }) => ({
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  textAlign: "center",
  width: "fit-content",
  margin: "auto",

  "& > h6": {
    border: "3px solid red",
  },
}));

const DrillsPage = (data) => {

  const {
    strapiDrillsPage,
    allStrapiDrillCategory,
  } = data.data;
  return (
    <Layout>
      <ContentWrapper width="85ch">
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <HeadingTitle variant="h3">
              {strapiDrillsPage.page_title}
            </HeadingTitle>
            <Typography
              style={{
                maxWidth: "85ch",
                marginTop: "10px",
              }}
              variant="body1"
              dangerouslySetInnerHTML={{
                __html: strapiDrillsPage.drills_page_description,
              }}
            />
          </Box>
        </Container>
        <Divider style={{ margin: "20px 0" }} />

        <Typography
          style={{ textAlign: "center" }}
          variant="h4"
        >
          Categories
        </Typography>

        <RelatedContentWrapper isHomePage={false} contentType="drillCategories" xs={3} items={allStrapiDrillCategory} />

      </ContentWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allStrapiDrillCategory {
      edges {
        node {
          description
          name
          one_sentence_description
          image {
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
    allStrapiDrill {
      edges {
        node {
          time_estimate
          isTeam
          isGroup
          isIndividual
          competency
          tags {
            name
          }
        }
      }
    }
    strapiDrillsPage {
      drills_page_description
      page_title
    }
  }
`;

export default DrillsPage;
