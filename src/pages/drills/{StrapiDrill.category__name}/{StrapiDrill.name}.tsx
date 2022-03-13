import { Box, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { default as React } from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import DrillDetails from "../../../components/drill/drill-details";
import ContentHeading from "../../../components/shared/content-heading";
import PageWrapper from "../../../components/shared/content-wrapper";

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
          image={drill.main_media.localFile.childImageSharp.gatsbyImageData}
          metaData={{
            pathname: location.pathname,
            date: null,
            tags: drill.tags,
            category: drill.category.name,

          }}
        />

        {/* {drill.example_media && drill.example_media.url ? <Box style={{ margin: "15px 0" }}>
          <video style={{ margin: "auto", display: "flex" }} controls>
            <source src={`${process.env.API_URL}${drill.example_media.url}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box> : null} */}

        <Box style={{ marginTop: "15px" }}>
          <Typography variant="h5">Details</Typography>
          <DrillDetails node={drill} />
        </Box>
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

        {drill.steps ? <><Box>
          <Typography variant="h5">Steps</Typography>
        </Box>
          <Stepper orientation="vertical">
            {drill.steps.map((step, index) => {
              return (
                <Step key={index} active={true}>
                  <StepLabel>{step.title}</StepLabel>
                  <StepContent>
                    {step.media ? (
                      <GatsbyImage
                        alt={step.title}
                        image={step.media.localFile.childImageSharp.gatsbyImageData}
                      />
                    ) : null}

                    <Typography
                      style={{ marginTop: "10px" }}
                      variant="body1"
                      dangerouslySetInnerHTML={{
                        __html: step.description,
                      }}
                    />
                  </StepContent>
                </Step>
              );
            })}
          </Stepper></> : null}

      </PageWrapper>
    </Layout>
  );
};

export const query = graphql`
    query($id: String!) {
      strapiDrill(id: { eq: $id }) {
      category {
        name
        description
      }
      time_estimate
      isTeam
      isGroup
      isIndividual
      competency
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
              gatsbyImageData(
                height: 300,
                width: 500
              )
            }
          }
        }
        title
      }
      main_media {
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
`;

export default CustomArticle;
