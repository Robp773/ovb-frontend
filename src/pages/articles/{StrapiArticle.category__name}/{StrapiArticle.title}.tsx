import {
  AccordionDetails,
  Divider,
  Typography,
  Accordion,
  AccordionSummary
} from "@mui/material";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import ContentHeading from "../../../components/shared/content-heading";
import PageWrapper from "../../../components/shared/content-wrapper";
import { attachContentTypes, encodeStrForUrl } from "../../../helpers/modifiers";
import { RelatedContentWrapper } from "../../../components/shared/related-content-list";
import { styled } from '@mui/material/styles';

const ReferencesAccordion = styled(Accordion)({
  marginTop: "30px",
  border: 0,
});

const StyledSummary = styled(AccordionSummary)(({ theme }) => ({
  background: theme.palette.grey[200],
}));


const CustomArticle = ({ data, location }) => {
  const references = [
    ...data.strapiArticle.ropes_course_activities,
    ...data.strapiArticle.drills,
  ];

  attachContentTypes(
    data.strapiArticle.drills,
    data.strapiArticle.ropes_course_activities
  );

  const seo = { title: data.strapiArticle.title };

  return (
    <Layout>
      <SEO seo={seo} />
      <PageWrapper>
        <ContentHeading
          image={data.strapiArticle.main_media.localFile.childImageSharp.gatsbyImageData}
          title={data.strapiArticle.title}
          contentType="article"
          iconWithText={true}
          metaData={{
            pathname: location.pathname,
            tags: data.strapiArticle.tags,
            category: data.strapiArticle.category.name,
            date: data.strapiArticle.date,
          }}
        />
        <Divider style={{ marginBottom: "10px" }} />
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: data.strapiArticle.content,
          }}
        />
        {references.length > 0 ? (
          <ReferencesAccordion elevation={0}>
            <StyledSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <BookmarkBorderIcon />
              <Typography style={{ marginLeft: "16px" }}>
                Referenced Content ({references.length})
              </Typography>
            </StyledSummary>
            <AccordionDetails style={{ padding: 0 }}>

              <RelatedContentWrapper xs={6} contentType="references" items={references} />

            </AccordionDetails>
          </ReferencesAccordion>
        ) : null}
      </PageWrapper>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      category {
        name
      }
      content
      date(formatString: "MMMM Do, YYYY")
      description
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
      ropes_course_activities {
        tags {
          name
        }
        description
        title
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
      tags {
        name
      }

      drills {
        name
        description
        category
        tags {
          name
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
  }
`;

export default CustomArticle;
