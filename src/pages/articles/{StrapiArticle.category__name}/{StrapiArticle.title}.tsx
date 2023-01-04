import { Box, Divider, styled, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentHeading from "../../../components/shared/content-heading";
import ContentWrapper from "../../../components/shared/content-wrapper";
import { getYouTubeId } from "../../../helpers/misc";

const IframeWrapper = styled(Box)({
  textAlign: "center",
  "& > iframe": {
    width: "100%",
    minHeight: "400px",
  },
});

const CustomArticle = ({ data, location }) => {
  const seo = { title: data.strapiArticle.title };

  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper>
        <ContentHeading
          image={
            data.strapiArticle.main_media.localFile.childImageSharp
              .gatsbyImageData
          }
          title={data.strapiArticle.title}
          contentType="article"
          iconWithText={true}
          metaData={{
            pathname: location.pathname,
            tags: data.strapiArticle.tags,
            category: data.strapiArticle.category.name,
            date: data.strapiArticle.date,
          }}
        />

        <Divider style={{ margin: "20px 0" }} />
        {data.strapiArticle.main_youtube_video && (
          <IframeWrapper>
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(
                data.strapiArticle.main_youtube_video
              )}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              align="center"
            ></iframe>
          </IframeWrapper>
        )}

        {data.strapiArticle.main_youtube_video && (
          <Divider style={{ margin: "20px 0" }} />
        )}

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: data.strapiArticle.content,
          }}
        />
      </ContentWrapper>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      category {
        name
      }
      content
      date(formatString: "MMMM Do, YYYY")
      description
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
      main_youtube_video
      tags {
        name
      }
    }
  }
`;

export default CustomArticle;
