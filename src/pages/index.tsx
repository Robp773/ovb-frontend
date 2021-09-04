import { Box, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { styled, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import SEO from "~/components/seo";
import Layout from "../components/layout";
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
  margin: "auto"
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

const ActivityListWrapper = styled(Container)({
  display: "flex",
  padding: "40px",
});

const ActivityContainer = styled(Container)({
  padding: "50px",
});

const StyledCard = styled(Card)({
  margin: "0 10px",
  flexGrow: 1,
  flexBasis: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
});

const CardActionButton = styled(Link)({
  textDecoration: "none",

});

const IndexPage = ({ data }) => {
  const { strapiHomePage: page, allStrapiNote: notes } = data;

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
        <Typography
          color="textPrimary"
          align="center"
          variant="h3"
          component="h3"
        >
          Recent Activity
        </Typography>
        <ActivityListWrapper>
          {notes.edges.map((item, index) => {
            const note = item.node;
            console.log(note);
            return (
              <StyledCard raised key={index}>
                <CardActionArea>
                  <Img
                    fixed={note.main_media.localFile.childImageSharp.fixed}
                  />
                  <CardContent>
                    <Typography  variant="h6">{note.title}</Typography>
                    <Typography variant="subtitle2" component="p">
                      {note.category} skills
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="p" >
                      {note.published_at}
                    </Typography>

                    <Typography variant="body2" component="p">
                      {note.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <CardActionButton to={`/${note.category}/${note.id}`}>
                    <Button variant="outlined">
                      Read more
                    </Button>
                  </CardActionButton>
                </CardActions>
              </StyledCard>
            );
          })}
        </ActivityListWrapper>
      </ActivityContainer>
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
          published_at(formatString: "MMMM Do YYYY")
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
