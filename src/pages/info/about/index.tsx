import { Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../../components/Layout";
import SEO from "../../../components/Seo";
import { AboutPageDataType } from "../../../../types/InfoPages";
import ContentWrapper from "../../../components/shared/content-wrapper";
import StaticPageHeading from "../../../components/static-page/static-page-heading";

const AboutPage = ({ data }: { data: AboutPageDataType }) => {
  const seo = { title: "About" };
  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper>
        <StaticPageHeading
          image={
            data.strapiAboutPage.main_media.localFile.childImageSharp
              .gatsbyImageData
          }
          title={data.strapiAboutPage.title}
        />
        <Divider style={{ marginBottom: "20px" }} />

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: data.strapiAboutPage.content }}
        />
      </ContentWrapper>
    </Layout>
  );
};

export const aboutPageQuery = graphql`
  query AboutPageQuery {
    strapiAboutPage {
      id
      content
      title
      main_media {
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

export default AboutPage;
