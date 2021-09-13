import {
  Box,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import ArticleCategoryChip from "../components/article/article-category-chip";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { encodeStrForUrl } from "../helpers/modifiers";
import bgImage from "../images/ovb-main-bg.jpg";

const ImageContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  padding: "55px",
});

const WhoWeAreCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundImage: `linear-gradient(to bottom, rgba(156, 19, 20, .85), rgba(156, 19, 20, .85)), url(${bgImage})`,
  backgroundClip: "10deg",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  alignItems: "space-between",
  padding: "55px",
  clipPath: "polygon(0 10%, 100% 0%, 100% 90%, 0 100%)",
});

const WhoWeAreText = styled(Typography)({
  fontStyle: "italic",
  maxWidth: "75ch",
  margin: "auto",
});

const TextWrapper = styled(Container)({
  padding: "0",
});

const LearnMoreButton = styled(Button)({
  padding: "20px",
  margin: "auto",
});

const AboutLink = styled(Link)({
  margin: "auto",
  textDecoration: "none",
});

const ActivityListWrapper = styled(Grid)({
  marginTop: "30px",
});

const ActivityContainer = styled("div")({
  padding: "40px",
});

const CardActionButton = styled(Link)({
  textDecoration: "none",
});

const IndexPage = ({ data }) => {
  const { strapiHomePage: page, allStrapiArticle: articles } = data;

  const seo = { title: "Home Page" };

  return (
    <Layout>
      <ImageContainer>
        <Img fixed={page.banner_image.localFile.childImageSharp.fixed} />
      </ImageContainer>
      <SEO seo={seo} />

      <WhoWeAreCard>
        <Typography
          color="textSecondary"
          align="center"
          variant="h3"
          component="h3"
        >
          Who We Are
        </Typography>

        <TextWrapper>
          <WhoWeAreText color="textSecondary" variant="h5">
            {page.intro_text}
          </WhoWeAreText>
        </TextWrapper>
        <AboutLink to="/info/about">
          <LearnMoreButton color="secondary" variant="contained" size="small">
            Learn More
          </LearnMoreButton>
        </AboutLink>
      </WhoWeAreCard>
      <ActivityContainer>
        <Typography color="textPrimary" align="center" variant="h3">
          Recent Articles
        </Typography>
        <ActivityListWrapper direction="row" container spacing={2}>
          {articles.edges.map((item, index) => {
            const article = item.node;
            return (
              <Grid key={index} item xs lg={3}>
                <Card
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      justifyContent: "flex-start",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Img
                      style={{ width: "100%", height: "200px" }}
                      fluid={article.main_media.localFile.childImageSharp.fluid}
                    />
                    <CardContent>
                      <Box style={{ padding: "0 0 5px 0" }}>
                        <Typography variant="h5">{article.title}</Typography>
                        <Typography variant="subtitle1">
                          {article.date}
                        </Typography>
                        <Box
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ArticleCategoryChip category={article.category} />
                        </Box>
                      </Box>

                      <Divider
                        style={{ margin: "5px 0" }}
                        variant="fullWidth"
                      />

                      <Typography variant="body2">
                        {article.description}
                      </Typography>
                    </CardContent>
                  </div>

                  <CardActions>
                    <CardActionButton
                      to={`/articles/${encodeStrForUrl(
                        article.category
                      )}/${encodeStrForUrl(article.title)}`}
                    >
                      <Button variant="outlined">Read more</Button>
                    </CardActionButton>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </ActivityListWrapper>
      </ActivityContainer>
    </Layout>
  );
};

export const articlePageQuery = graphql`
  {
    strapiHomePage {
      id
      intro_text
      banner_image {
        localFile {
          childImageSharp {
            fixed(width: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    allStrapiArticle(sort: { fields: date, order: DESC }, limit: 4) {
      edges {
        node {
          strapiId
          ropes_course_activities {
            content
            created_at
            title
          }
          content
          category
          created_at
          date(formatString: "MMMM Do YYYY")
          title
          description
          tags {
            name
          }
          main_media {
            alternativeText
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

export default IndexPage;
