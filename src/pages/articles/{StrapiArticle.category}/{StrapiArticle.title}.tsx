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
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import PageHeading from "../../../components/article/article-heading";
import PageWrapper from "../../../components/article/article-wrapper";
import TagChip from "../../../components/shared/TagChip";

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

const CustomArticle = ({ data }) => {
  const references = [
    ...data.strapiArticle.ropes_course_activities,
    ...data.strapiArticle.drills,
  ];
  console.log(references);

  const seo = { title: "Store" };

  return (
    <Layout>
      <SEO seo={seo} />
      <PageWrapper>
        <PageHeading
          image={data.strapiArticle.main_media.localFile.childImageSharp.fluid}
          title={data.strapiArticle.title}
          metaData={{
            tags: data.strapiArticle.tags,
            category: data.strapiArticle.category,
            date: data.strapiArticle.date,
          }}
        />

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: data.strapiArticle.content,
          }}
        />
        {references.length > 0 ? (
          <ReferencesAccordion variant="outlined">
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
            <AccordionDetails>
              {/* {references.map((reference, index) => {
              return <div>{reference.name}</div>;
            })} */}

              <Grid direction="row" container spacing={2}>
                {references.map((item, index) => {
                  const reference = item;
                  return (
                    <Grid key={index} item xs lg={6}>
                      <Card
                        elevation={1}
                        style={{
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
                              reference.main_media.localFile.childImageSharp.fluid
                            }
                          />
                          <CardContent>
                            <Box style={{ padding: "0 0 5px 0" }}>
                              <Typography variant="subtitle1">
                                {reference.name}
                              </Typography>
                            <TagChip name="test"/>

                              <Box
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                              </Box>
                            </Box>

                            <Divider
                              style={{ margin: "5px 0" }}
                              variant="fullWidth"
                            />

                            <Typography variant="subtitle2">
                              {reference.description}
                            </Typography>
                          </CardContent>
                        </div>

                        <CardActions>
                          <CardActionButton
                            to={`/references/${reference.name
                              .toLowerCase()
                              .replace(/[_-]/g, "-")}/${reference.name
                              .replace(/ +/g, "-")
                              .toLowerCase()}`}
                          >
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
      category
      content
      date(formatString: "MMMM Do, YYYY")
      description
      main_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      ropes_course_activities {
        tags {
          name
        }
        description
        name
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
