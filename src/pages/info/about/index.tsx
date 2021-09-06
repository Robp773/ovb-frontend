import { styled, Typography } from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import PageHeading from "../../../components/Page/page-heading";
import PageImage from "../../../components/Page/page-main-image";
import PageWrapper from "../../../components/Page/page-wrapper";


const AboutPage = ({ data }) => {
  console.log(data);
  const seo = { title: "About" };

  return (
    <Layout>
      <SEO seo={seo} />

      <PageWrapper>
        <PageHeading title={data.strapiAboutPage.title} />

        <PageImage
          image={
            data.strapiAboutPage.main_media.localFile.childImageSharp.fixed
          }
        />
        <Typography variant="body1"
          dangerouslySetInnerHTML={{ __html: data.strapiAboutPage.content }}
        />
      </PageWrapper>
    </Layout>
  );
};

export const notePageQuery = graphql`
  query AboutPageQuery {
    strapiAboutPage {
      id
      content
      title
      main_media {
        localFile {
          childImageSharp {
            fixed(width: 500, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

export default AboutPage;
