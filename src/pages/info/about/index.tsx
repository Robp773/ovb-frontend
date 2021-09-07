import { Typography } from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import StaticPageHeading from "../../../components/static-page/static-page-heading";
import StaticPageWrapper from "../../../components/static-page/static-page-wrapper";

const AboutPage = ({ data }) => {
  console.log(data);
  const seo = { title: "About" };

  return (
    <Layout>
      <SEO seo={seo} />
      <StaticPageWrapper>
        <StaticPageHeading
          image={
            data.strapiAboutPage.main_media.localFile.childImageSharp.fluid
          }
          title={data.strapiAboutPage.title}
        />
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: data.strapiAboutPage.content }}
        />
      </StaticPageWrapper>
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default AboutPage;
