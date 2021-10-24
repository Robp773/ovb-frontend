import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  styled,
  Typography,
  withTheme,
} from "@material-ui/core";
import { Category } from "@material-ui/icons";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import CategoryHeading from "../../components/shared/category-heading";
import PageWrapper from "../../components/shared/content-wrapper";
import Img from "gatsby-image";
import ArticleCategoryChip from "../../components/article/article-category-chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "gatsby";
import { encodeStrForUrl } from "../../helpers/modifiers";
import { countTags } from "../../helpers/countTags";
import ReactWordcloud from "react-wordcloud";

const MainImage = styled(Img)({
  width: "100%",
  height: "200px",
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

const ArticlesPage = (data) => {
  const categories = data.data.allStrapiArticleCategory.edges;
  console.log(categories);
  const tags = countTags(data.data.allStrapiArticle);
  return (
    <Layout>
      <PageWrapper width="100ch">
        <Container
          style={{
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <HeadingTitle variant="h3">Articles</HeadingTitle>{" "}
            <Box
              style={{
                height: "200px",
                textAlign: "center",
              }}
            >
              <ReactWordcloud
                words={tags}
                // size={[400, 100]}
                options={{
                  // colors: [ "#353333"],
                  colors: ["#70A1D7", "#353333", "#9c1314"],
                  spiral: "rectangular",
                  padding: 5,
                  rotations: 0,
                  fontSizes: [15, 30],
                }}
              />
            </Box>
            <Typography
              style={{
                maxWidth: "85ch",
                margin: "5px auto",
              }}
              variant="body1"
              dangerouslySetInnerHTML={{
                __html: data.data.strapiArticlesPage.description,
              }}
            />
          </Box>
        </Container>


        <Typography
          style={{ textAlign: "center", margin: "20px 0" }}
          variant="h4"
        >
          Topics
        </Typography>
        <Grid direction="row" container spacing={1}>
          {categories.map((category, index) => {
            return (
              <Grid style={{ height: "100%" }} key={index} item xs={4}>
                <Card>
                  <Box style={{ position: "relative" }}>
                    <MainImage
                      fluid={
                        category.node.main_media.localFile.childImageSharp.fluid
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
                      to={`/articles/${encodeStrForUrl(category.node.name)}`}
                    >
                      <Button variant="outlined">View Topic</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
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
                fluid(maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
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
    allStrapiArticle {
      edges {
        node {
          tags {
            name
          }
        }
      }
    }
  }
`;

export default ArticlesPage;
