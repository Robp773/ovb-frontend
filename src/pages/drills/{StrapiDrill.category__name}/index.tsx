import {
  Box,
  Button,
  Divider,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { graphql } from "gatsby";
import React, { useContext } from "react";
import Layout from "../../../components/layout";
import PageWrapper from "../../../components/shared/content-wrapper";
import ContentHeading from "../../../components/shared/content-heading";
import { RelatedContentWrapper } from "../../../components/shared/related-content-list";
import slugify from "@sindresorhus/slugify";
import DrillsContext from "../../../components/DrillsContext";
import SavedDrillsDrawer from "../../../components/drill/saved-drills-drawer";

const DrillCategoryPage = ({ data, location }) => {
  const categoryData = data.strapiDrillCategory;
  const { allStrapiDrill: drills } = data;
  const savedDrills = useContext(DrillsContext);

  return (
    <Layout>
      <PageWrapper>
        <SavedDrillsDrawer
          changeSelectedDrills={savedDrills.changeSelectedDrills}
          drills={savedDrills.selectedDrills}
        />

        <ContentHeading
          image={categoryData.image.localFile.childImageSharp.gatsbyImageData}
          title={categoryData.name}
          iconWithText={false}
          contentType="drills"
          metaData={{
            pathname: location.pathname,
            category: categoryData.name,
            date: null,
            tags: [],
          }}
        />

        <Typography
          style={{ marginTop: "20px" }}
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: categoryData.description,
          }}
        />

        <Divider style={{ margin: "20px 0" }} />
        <Typography style={{ textAlign: "center" }} variant="h4">
          Drills
        </Typography>
        <RelatedContentWrapper
          savedDrills={savedDrills}
          xs={6}
          contentType="drills"
          items={drills}
        />
      </PageWrapper>
    </Layout>
  );
};

export const query = graphql`
  query ($category__name: String!) {
    strapiDrillCategory(name: { eq: $category__name }) {
      description
      name
      one_sentence_description
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              height: 300
              width: 450
              transformOptions: { fit: FILL }
            )
          }
        }
      }
    }

    allStrapiDrill(filter: { category: { name: { eq: $category__name } } }) {
      edges {
        node {
          category {
            name
          }
          time_estimate
          isTeam
          isGroup
          isIndividual
          competency
          name
          description
          summary
          category {
            name
          }
          steps {
            description
            title
          }
          tags {
            name
          }
          main_media {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  height: 750
                  width: 1000
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

export default DrillCategoryPage;
