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

const CustomArticle = ({ data, location }) => {
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
            pathname: location.pathname,
            date: null,
            tags: drill.tags,
            category: drill.category.name,
          }}
        />
        <video style={{ margin: "auto" }} controls>
          <source src={`${process.env.API_URL}${drill.example_media.url}`} type="video/mp4" />
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
          {`${process.env.API_URL}${drill.example_media.url}`}
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
    strapiDrill {
      category {
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
