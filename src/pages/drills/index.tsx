import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  styled,
  Typography,
  withTheme,
} from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import Img from "gatsby-image";
import ArticleCategoryChip from "../../components/article/article-category-chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import { Link } from "gatsby";
import { encodeStrForUrl } from "../../helpers/modifiers";
import ContentWrapper from "../../components/shared/content-wrapper";
import { RelatedContentWrapper } from "../../components/shared/related-content-list";

const MainImage = styled(Img)({
  width: "100%",
  height: "175px",
});
const CategoryChipWrapper = styled("div")({
  "& > svg": {
    width: "initial",
    height: "30px",
    marginLeft: "10px",
  },
});

const CategoryAndChipWrapper = styled(Box)({
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "8px 0px",
});

const HeadingTitle = styled(withTheme(Typography))((props) => ({
  borderBottom: `3px solid ${props.theme.palette.primary.main}`,
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
    allStrapiDrill,
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
