import {
  Box, Container
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { styled } from '@mui/system';
import Typography from "@material-ui/core/Typography";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { RelatedContentWrapper } from "../components/shared/related-content-list";
import bgImage from "../images/ovb-main-bg.jpg";

const ImageContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: "25px",
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
  margin: "20px auto",
});

const AboutLink = styled(Link)({
  margin: "auto",
  textDecoration: "none",
});

const ActivityContainer = styled("div")({
  padding: "40px",
});

const IndexPage = ({ data }) => {
  const { strapiHomePage: page, allStrapiArticle: articles } = data;

  const seo = { title: "Home Page" };

  return (
    <Layout>
      <ImageContainer>
        <Img style={{ width: "30%" }} fluid={page.banner_image.localFile.childImageSharp.fluid} />
      </ImageContainer>
      <SEO seo={seo} />

      <WhoWeAreCard>
        <Typography
          color="textSecondary"
          align="center"
          variant="h3"
          style={{
            margin: "20px auto"
          }}
        >
          Who We Are
        </Typography>

        <TextWrapper>
          <WhoWeAreText color="textSecondary" variant="subtitle1">
            {page.intro_text}
          </WhoWeAreText>
        </TextWrapper>
        <AboutLink to="/info/about">
          <LearnMoreButton color="secondary" variant="contained" size="large">
            Learn More
          </LearnMoreButton>
        </AboutLink>
      </WhoWeAreCard>
      <ActivityContainer>
        <Typography style={{
          marginBottom: "20px"
        }} color="textPrimary" align="center" variant="h4">
          Recent Articles
        </Typography>
        <RelatedContentWrapper isHomePage={true} contentType="articles" withCategory items={articles} />
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
            fluid {
              ...GatsbyImageSharpFluid
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
          category { 
            name
          }
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
  }
`;

export default IndexPage;
