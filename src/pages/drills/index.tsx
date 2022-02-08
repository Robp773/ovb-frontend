import {
  Box,
  Button,
  Container,
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
            marginBottom: "20px",
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
                margin: "10px auto",
              }}
              variant="body1"
              dangerouslySetInnerHTML={{
                __html: strapiDrillsPage.drills_page_description,
              }}
            />
          </Box>
        </Container>

        <Typography
          style={{ textAlign: "center", marginBottom: "20px" }}
          variant="h4"
        >
          Categories
        </Typography>
        <Grid direction="row" container spacing={1}>
          {allStrapiDrillCategory.edges.map((category, index) => {
            return (
              <Grid style={{ height: "100%" }} key={index} item xs={4}>
                <Card>
                  <Box style={{ position: "relative" }}>
                    <MainImage
                      fluid={
                        category.node.image.localFile.childImageSharp.fluid
                      }
                    />
                  </Box>
                  <CardContent>
                    <CategoryAndChipWrapper>
                      <Typography variant="h6">{category.node.name}</Typography>
                      <CategoryChipWrapper>
                        <ArticleCategoryChip category={category.node.name} />
                      </CategoryChipWrapper>
                    </CategoryAndChipWrapper>

                    <Typography
                      variant="body2"
                      dangerouslySetInnerHTML={{
                        __html: category.node.one_sentence_description,
                      }}
                    />
                  </CardContent>
                  <CardActions>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/drills/${encodeStrForUrl(category.node.name)}`}
                    >
                      <Button variant="outlined">View Topic</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
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
          image {
            localFile {
              childImageSharp {
                fluid(maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
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
