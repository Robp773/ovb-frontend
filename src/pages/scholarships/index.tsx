import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ContentWrapper from "../../components/shared/content-wrapper";
import StaticPageHeading from "../../components/static-page/static-page-heading";

const HeadingTitle = styled(Typography)(({ theme }) => ({
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  textAlign: "center",
  width: "fit-content",
  margin: "0 auto",
}));

const ScholarshipsPage = ({ data }) => {
  const seo = { title: "Scholarships" };

  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper>
        <StaticPageHeading
          image={
            data.strapiScholarshipsPage.main_media.localFile.childImageSharp
              .gatsbyImageData
          }
          title={data.strapiScholarshipsPage.page_title}
        />
        <Typography
          marginTop="20px"
          dangerouslySetInnerHTML={{
            __html: data.strapiScholarshipsPage.page_content,
          }}
          variant="body1"
        />
      </ContentWrapper>
    </Layout>
  );
};

export const notePageQuery = graphql`
  query ScholarshipsPageQuery {
    strapiScholarshipsPage {
      page_title
      page_content
      main_media {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default ScholarshipsPage;
