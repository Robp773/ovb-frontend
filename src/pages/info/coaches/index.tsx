import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { Container, styled, Typography, withTheme } from "@material-ui/core";
import PageWrapper from "../../../components/article/article-wrapper";
import PageHeading from "../../../components/article/article-heading";

const CoachContainer = styled(Container)({});

const HeadingContainer = styled(withTheme(Container))((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "50px 0",
  padding: 0,
  background: props.theme.palette.primary.dark,
}));

const CoachName = styled(withTheme(Typography))((props) => ({
  margin: "auto",
  color: props.theme.palette.common.white,
}));

const CalendarPage = ({ data }) => {
  console.log(data);
  const seo = { title: "Coaches" };

  return (
    <Layout>
      <SEO seo={seo} />
      <PageWrapper>
        <PageHeading title={data.strapiCoachesPage.page_title} />

        {data.strapiCoachesPage.coaches.map((coach, index) => {
          return (
            <div>
              <HeadingContainer>
                <CoachName variant="h4">{coach.coach_name}</CoachName>
                <Img
                  fixed={coach.coach_image.localFile.childImageSharp.fixed}
                />
              </HeadingContainer>

              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{ __html: coach.coach_bio }}
              />
            </div>
          );
        })}
      </PageWrapper>
    </Layout>
  );
};

export const calendarPageQuery = graphql`
  query MyQuery {
    strapiCoachesPage {
      coaches {
        coach_bio
        coach_image {
          localFile {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        coach_name
      }
      page_title
    }
  }
`;

export default CalendarPage;
