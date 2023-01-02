import { Container, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { CoachPageDataType } from "../../../../types/InfoPages";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentWrapper from "../../../components/shared/content-wrapper";
import StaticPageHeading from "../../../components/static-page/static-page-heading";

const HeadingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "20px 0",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const CoachName = styled(Typography)({
  margin: "auto",
  width: "50%",
  textAlign: "center",
});

const CalendarPage = ({ data }: { data: CoachPageDataType }) => {
  const seo = { title: "Coaches" };
  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper width="85ch">
        <StaticPageHeading title={data.strapiCoachesPage.page_title} />
        {data.strapiCoachesPage.coaches.map((coach, index) => {
          return (
            <Container key={index}>
              <HeadingContainer>
                <CoachName variant="h6">{coach.coach_name}</CoachName>
                <GatsbyImage
                  alt={coach.coach_name}
                  image={
                    coach.coach_image.localFile.childImageSharp.gatsbyImageData
                  }
                />
              </HeadingContainer>

              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{ __html: coach.coach_bio }}
              />

              <Divider style={{ margin: "20px 0" }} />
            </Container>
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
              gatsbyImageData(
                height: 200
                width: 300
                transformOptions: { fit: FILL }
              )
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
