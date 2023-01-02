import { Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "~/components/Layout";
import SEO from "~/components/Seo";
import ContentHeading from "../../../components/shared/content-heading";
import ContentWrapper from "../../../components/shared/content-wrapper";
import StaticPageHeading from "../../../components/static-page/static-page-heading";
import PageWrapper from "../../../components/shared/content-wrapper";
import { TechnicalSkillsPageDataType } from "../../../../types/ProcessPage";

const TechnicalSkillsPage = ({
  data: { strapiTechnicalSkillsPage },
}: {
  data: { strapiTechnicalSkillsPage: TechnicalSkillsPageDataType };
}) => {
  const seo = { title: "Technical Skills" };
  return (
    <Layout>
      <SEO seo={seo} />
      <PageWrapper>
        <ContentHeading
          image={
            strapiTechnicalSkillsPage.main_image.localFile.childImageSharp
              .gatsbyImageData
          }
          title={strapiTechnicalSkillsPage.page_title}
          iconWithText={false}
          contentType="chapter"
          metaData={{
            pathname: "",
            category: "Technical",
            date: null,
            tags: [],
          }}
        />

        <Divider style={{ margin: "20px 0" }} />

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: strapiTechnicalSkillsPage.page_content,
          }}
        />
      </PageWrapper>
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
              height: 300
              width: 450
              transformOptions: { fit: FILL }
            )
          }
        }
      }
    }
  }
`;

export default TechnicalSkillsPage;
