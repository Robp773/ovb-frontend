import { Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentWrapper from "../../../components/shared/content-wrapper";
import StaticPageHeading from "../../../components/static-page/static-page-heading";

const AboutPage = ({ data }) => {

  const seo = { title: "About" };

  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper width="85ch">
        <StaticPageHeading
          image={
            data.strapiAboutPage.main_media.localFile.childImageSharp.gatsbyImageData
          }
          title={data.strapiAboutPage.title}
        />
        <Divider  style={{ marginBottom: "20px" }} />

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
              height: 300,
              width: 400
            )            
          }
        }
      }
    }
  }
`;

export default AboutPage;
