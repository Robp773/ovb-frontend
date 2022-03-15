import { Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentWrapper from "../../../components/shared/content-wrapper";
import StaticPageHeading from "../../../components/static-page/static-page-heading";

const TechnicalSkillsPage = ({ data }) => {

  const seo = { title: "Technical Skills" };

  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper width="85ch">
        <StaticPageHeading
          image={
            data.strapiTechnicalSkillsPage.main_image.localFile.childImageSharp.gatsbyImageData
          }
          title={data.strapiTechnicalSkillsPage.page_title}
        />
        <Divider style={{ marginBottom: "20px" }} />

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: data.strapiTechnicalSkillsPage.page_content }}
        />
      </ContentWrapper>
    </Layout>
  );
};

export const aboutPageQuery = graphql`
    query technicalSkillsPageQuery {
      strapiTechnicalSkillsPage {
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

export default TechnicalSkillsPage;
