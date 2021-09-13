import { Button } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import Step from "@material-ui/core/Step";
import StepContent from "@material-ui/core/StepContent";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { graphql } from "gatsby";
import { default as React } from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentHeading from "../../../components/shared/content-heading";
import PageWrapper from "../../../components/shared/content-wrapper";
import Img from "gatsby-image";

const CustomArticle = ({ data }) => {
  console.log(data);
  const drill = data.strapiDrill;
  const seo = { title: drill.name };

  return (
    <Layout>
      <SEO seo={seo} />
      <PageWrapper>
        <ContentHeading
          title={drill.name}
          contentType="drill"
          image={null}
          metaData={{
            date: null,
            tags: drill.tags,
            category: drill.drill_category.name,
          }}
        />
        <video style={{ margin: "auto" }} width="400" height="300" controls>
          <source
            src={`http://localhost:1337${drill.example_media.url}`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Box style={{ margin: "15px 0" }}>
          <Typography variant="h5">Description</Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: drill.description,
            }}
          />
        </Box>
          <Box style={{ margin: "15px 0" }}>
            <Typography variant="h5">Summary</Typography>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{
                __html: drill.summary,
              }}
            />
          </Box>

        <Box>
          <Typography variant="h5">Steps</Typography>
        </Box>
        <Stepper orientation="vertical">
          {drill.steps.map((step, index) => {
            return (
              <Step key={index} active={true}>
                <StepLabel>{step.title}</StepLabel>
                <StepContent>
                  {step.media ? (
                    <Img
                      style={{ width: "100%", height: "200px" }}
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

// Have the team circle up with at least a space of two arm’s length between
// each player in the circle. Two players, each with a ball stand outside the circle.
// One player is “it” and chases the other.  Each time the chased player goes between two group
//  members the space between them is closed (they hold hands to show it is closed). If all the
//   spaces are sealed before the player is tagged the chased player wins.  To assure the safety
//    the players in the circle the players are not permitted to go through any closed spaces.

export const query = graphql`
  {
    strapiDrill {
      drill_category {
        name
        description
      }
      description
      summary
      name
      tags {
        name
      }
      example_media {
        url
        caption
        alternativeText
      }
      steps {
        description
        media {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        title
      }
      main_media {
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
`;

export default CustomArticle;
