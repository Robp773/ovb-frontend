import { Box, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { styled, useTheme } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";
import Typography from "@material-ui/core/Typography";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import SEO from "~/components/seo";
import Layout from "../components/layout";
import bgImage from "../images/ovb-main-bg.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const ImageContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  padding: "55px",
});

// #9c1314 red
// #353333 black
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
  clipPath: "polygon(0 7%, 100% 0%, 100% 93%, 0 100%)",
});

const WhoWeAreText = styled(Typography)({
  fontStyle: "italic",
});

const TextWrapper = styled(Container)({
  padding: "40px",
});

const LearnMoreButton = styled(Button)({
  padding: "20px",
  margin: "auto",
});

const AboutLink = styled(Link)({
  margin: "auto",
  textDecoration: "none",
});

const FeedWrapper = styled(Container)({
  display: "flex",
});

const StyledCardMedia = styled(CardMedia)({
  height: "150px",
});

const IndexPage = ({ data }) => {
  const { strapiHomePage: page, allStrapiNote: notes } = data;

  console.log(notes);

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
        <AboutLink to="/about">
          <LearnMoreButton color="secondary" variant="contained" size="small">
            Learn More
          </LearnMoreButton>
        </AboutLink>
      </WhoWeAreCard>

      <FeedWrapper>
        {notes.edges.map((item, index) => {
          const note = item.node;
          console.log(note);
          return (
            <Card key={index}>
              <CardActionArea>
                <Img fixed={note.main_media.localFile.childImageSharp.fixed} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {note.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {note.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/about">
                  Read More
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </FeedWrapper>
    </Layout>
  );
};

export const notePageQuery = graphql`
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
    allStrapiNote(sort: { fields: date, order: DESC }, limit: 3) {
      edges {
        node {
          id
          ropes_course_activities {
            content
            created_at
            title
          }
          published_at
          content
          category
          created_at
          date
          title
          description
          main_media {
            alternativeText
            localFile {
              childImageSharp {
                fixed(height: 200) {
                  ...GatsbyImageSharpFixed
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
