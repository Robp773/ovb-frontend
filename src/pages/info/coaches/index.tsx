import { Container, Divider, styled, Typography, withTheme } from "@material-ui/core";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentWrapper from "../../../components/shared/content-wrapper";
import StaticPageHeading from "../../../components/static-page/static-page-heading";

const HeadingContainer = styled(withTheme(Container))((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "20px 0",
  padding: 0,
  background: props.theme.palette.grey[200]
}));

const CoachName = styled(withTheme(Typography))((props) => ({
  margin: "auto",
}));

const CalendarPage = ({ data }) => {
  const seo = { title: "Calendar" };

  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper width="85ch">
        <StaticPageHeading title={data.strapiCoachesPage.page_title} />
        {data.strapiCoachesPage.coaches.map((coach, index) => {
          return (
            <div key={index}>
              <HeadingContainer>
                <CoachName variant="h6">{coach.coach_name}</CoachName>
                <Img
                  fixed={coach.coach_image.localFile.childImageSharp.fixed}
                />
              </HeadingContainer>

              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{ __html: coach.coach_bio }}
              />

              <Divider style={{ margin: "20px 0" }} />
            </div>
          );
        })}
      </ContentWrapper>
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
