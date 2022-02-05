import {
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  styled,
  Typography,
  withTheme,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import ContentHeading from "../../components/shared/content-heading";
import PageWrapper from "../../components/shared/content-wrapper";
import Img from "gatsby-image";

const ReferencesAccordion = styled(Accordion)({
  marginTop: "30px",
});

const StyledSummary = styled(withTheme(AccordionSummary))((props) => ({
  background: props.theme.palette.grey[100],
  // color: props.theme.palette.common.white,
}));

const CardActionButton = styled(Link)({
  textDecoration: "none",
});

const CustomArticle = ({ data, location }) => {
  console.log(data);
  const activity = data.strapiRopesCourseActivity;
  // const seo = { title: activity.name };

  return (
    <Layout>
      {/* <SEO seo={seo} /> */}
      <PageWrapper>
        <ContentHeading
          title={activity.title}
          contentType="activity"
          image={activity.main_media.localFile.childImageSharp.fixed}
          metaData={{
            pathname: location.pathname,
            date: null,
            tags: activity.tags,
            category: null,
          }}
        />
        {/* <video style={{ margin: "auto" }} width="400" height="300" controls> */}
        {/* <source src={`/${activity.example_media.url}`} type="video/mp4" /> */}
        {/* Your browser does not support the video tag. */}
        {/* </video> */}
        <Box style={{ margin: "15px 0" }}>
          <Typography variant="h5">Description</Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: activity.description,
            }}
          />
        </Box>

        <Box>
          <Typography variant="h5">Steps</Typography>
        </Box>
        <Stepper orientation="vertical">
          {activity.steps.map((step, index) => {
            return (
              <Step key={index} active={true}>
                <StepLabel>{step.title}</StepLabel>
                <StepContent>
                  {step.media ? (
                    <Img
                      style={{ maxHeight: "300px" }}
                      fluid={step.media.localFile.childImageSharp.fluid}
                    />
                  ) : null}

                  <Typography
                    variant="body1"
                    dangerouslySetInnerHTML={{
                      __html: step.description,
                    }}
                  />
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
      </PageWrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    strapiRopesCourseActivity {
      description
      title
      content
      tags {
        name
      }
      steps {
        description
        title
        media {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      main_media {
        localFile {
          childImageSharp {
            fixed (width: 300, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

export default CustomArticle;
