import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { Button, Typography } from "@mui/material";
import ContentWrapper from "../../components/shared/content-wrapper";
import StaticPageHeading from "../../components/static-page/static-page-heading";
import { ScholarshipsPageDataType } from "../../../types/ScholarshipsPage";

const ScholarshipsPage = ({
  data: { strapiScholarshipsPage },
}: {
  data: { strapiScholarshipsPage: ScholarshipsPageDataType };
}) => {
  const seo = { title: "Scholarships" };
  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper>
        <StaticPageHeading
          image={
            strapiScholarshipsPage.main_media.localFile.childImageSharp
              .gatsbyImageData
          }
          title={strapiScholarshipsPage.page_title}
        />
        <Typography
          marginTop="20px"
          dangerouslySetInnerHTML={{
            __html: strapiScholarshipsPage.page_content,
          }}
          variant="body1"
        />
        <Button
          sx={{ width: "fit-content", mt: 3 }}
          fullWidth={false}
          variant="contained"
          target="#"
          href="https://buy.stripe.com/5kA8xp6LocBQ1X25kl"
        >
          Donate to the Fund
        </Button>
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
