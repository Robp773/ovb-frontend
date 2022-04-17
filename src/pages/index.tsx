import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { RelatedContentWrapper } from "../components/shared/related-content-list";
import bgImage from "../images/ovb-main-bg.jpg";

const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "25px",
  // width: "fit-content",
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}));

const WhoWeAreCard = styled(Box)(({ theme }) => ({
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
  [theme.breakpoints.down("md")]: {
    padding: "55px 20px",
  },
}));

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

const ActivityContainer = styled("div")(({ theme }) => ({
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    padding: "5px"
  },
}))

const IndexPage = ({ data }) => {
  const { strapiHomePage: page, allStrapiArticle: articles } = data;

  const seo = { title: "Home Page" };

  return (
    <Layout>
      <ImageContainer>
        <GatsbyImage
          alt="One Voice Basketball logo"
          image={page.banner_image.localFile.childImageSharp.gatsbyImageData}
        />
      </ImageContainer>
      <SEO seo={seo} />

      <WhoWeAreCard>
        <Typography
          color="common.white"
          align="center"
          variant="h3"
          style={{
            margin: "20px auto",
          }}
        >
          Who We Are
        </Typography>

        <TextWrapper>
          <WhoWeAreText color="common.white" variant="subtitle1">
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
        <Typography
          style={{
            marginBottom: "20px",
          }}
          color="textPrimary"
          align="center"
          variant="h4"
        >
          Recent Articles
        </Typography>
        <RelatedContentWrapper
          isHomePage={true}
          contentType="articles"
          withCategory
          items={articles}
        />
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
            gatsbyImageData(
              height: 200
              width: 500
              transformOptions: { fit: FILL }
            )
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
                  height: 750,
                  width: 1000,
                  transformOptions: { fit: FILL, cropFocus: CENTER }
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
