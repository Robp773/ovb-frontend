import {
  AccordionDetails,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  styled,
  Typography,
  withTheme,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import DrillCategoryChip from "../../../components/drill/drill-category-chip";
import TagChip from "../../../components/shared/content-chip";
import ContentHeading from "../../../components/shared/content-heading";
import PageWrapper from "../../../components/shared/content-wrapper";
import { attachContentTypes } from "../../../helpers/modifiers";

const ReferencesAccordion = styled(Accordion)({
  marginTop: "30px",
  border: 0,
});

const StyledSummary = styled(withTheme(AccordionSummary))((props) => ({
  background: props.theme.palette.grey[200],
}));

const CardActionButton = styled(Link)({
  textDecoration: "none",
});

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
          image={data.strapiArticle.main_media.localFile.childImageSharp.fixed}
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
              <Grid direction="row" container spacing={2}>
                {references.map((reference, index) => {
                  return (
                    <Grid key={index} item md={6}>
                      <Card
                        variant="outlined"
                        style={{
                          marginTop: "10px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            justifyContent: "flex-start",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Img
                            style={{ width: "100%", height: "200px" }}
                            fluid={
                              reference.main_media.localFile.childImageSharp
                                .fluid
                            }
                          />
                          <CardContent>
                            <Box
                              style={{
                                textAlign: "center",
                                padding: "0 0 5px 0",
                              }}
                            >
                              <Typography variant="subtitle1">
                                {reference.name || reference.title}
                              </Typography>

                              {reference.category ? (
                                <div>
                                  <DrillCategoryChip
                                    category={
                                      reference.category.name
                                        ? reference.category.name
                                        : reference.category
                                    }
                                  />
                                </div>
                              ) : null}

                              {reference.tags.map((tag, key) => {
                                return <TagChip key={key} name={tag.name} />;
                              })}

                              <Box
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              ></Box>
                            </Box>

                            <Divider
                              style={{ margin: "16px 0" }}
                              variant="fullWidth"
                            />

                            <Typography
                              variant="subtitle2"
                              dangerouslySetInnerHTML={{
                                __html: reference.description,
                              }}
                            />
                          </CardContent>
                        </div>
                        <CardActions>
                          <CardActionButton to={reference.url} target="_blank">
                            <Button variant="outlined">Read more</Button>
                          </CardActionButton>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
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
            fixed(width: 300, height: 250) {
              ...GatsbyImageSharpFixed
            }
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
              fluid {
                ...GatsbyImageSharpFluid
              }
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
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default CustomArticle;
