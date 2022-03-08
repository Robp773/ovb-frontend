import { Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentWrapper from "../../../components/shared/content-wrapper";
import StaticPageHeading from "../../../components/static-page/static-page-heading";

const LeadershipSkillsPage = ({ data }) => {

  const seo = { title: "Leadership Skills" };

  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper width="85ch">
        <StaticPageHeading
          image={
            data.strapiLeadershipSkillsPage.main_image.localFile.childImageSharp.gatsbyImageData
          }
          title={data.strapiLeadershipSkillsPage.page_title}
        />
        <Divider style={{ marginBottom: "20px" }} />

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: data.strapiLeadershipSkillsPage.page_content }}
        />
      </ContentWrapper>
    </Layout>
  );
};

export const aboutPageQuery = graphql`
    query LeadershipSkillsPageQuery {
      strapiLeadershipSkillsPage {
        page_content
        page_title
        main_image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                height: 250,
                width: 350
              )            
            }
          }
        }
      }
    }
`;

export default LeadershipSkillsPage;
