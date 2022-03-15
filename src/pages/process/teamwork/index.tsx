import { Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentWrapper from "../../../components/shared/content-wrapper";
import StaticPageHeading from "../../../components/static-page/static-page-heading";

const TeamSkillsPage = ({ data }) => {

  const seo = { title: "Teamwork Skills" };

  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper width="85ch">
        <StaticPageHeading
          image={
            data.strapiTeamSkillsPage.main_image.localFile.childImageSharp.gatsbyImageData
          }
          title={data.strapiTeamSkillsPage.page_title}
        />
        <Divider style={{ marginBottom: "20px" }} />

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: data.strapiTeamSkillsPage.page_content }}
        />
      </ContentWrapper>
    </Layout>
  );
};

export const aboutPageQuery = graphql`
    query TeamSkillsPageQuery {
      strapiTeamSkillsPage {
        page_content
        page_title
        main_image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                height: 300,
                width: 450,
                transformOptions: {fit: FILL},
              )     
            }
          }
        }
      }
    }
`;

export default TeamSkillsPage;
