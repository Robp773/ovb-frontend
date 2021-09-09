import { Chip, Container, Typography } from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import PageHeading from "../../../components/article/article-heading";
import PageImage from "../../../components/article/article-main-image";
import PageWrapper from "../../../components/article/article-wrapper";

const CustomArticle = ({ data }) => {
  console.log(data);
  const seo = { title: "Store" };

  return (
    <Layout>
      <SEO seo={seo} />
      <PageWrapper>
        <PageHeading
          image={data.strapiArticle.main_media.localFile.childImageSharp.fluid}
          title={data.strapiArticle.title}
          metaData={{
            tags: data.strapiArticle.tags,
            category: data.strapiArticle.category,
            date: data.strapiArticle.date,
          }}
        />

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: data.strapiArticle.content,
          }}
        />
      </PageWrapper>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      category
      content
      date(formatString: "MMMM Do, YYYY")
      description
      main_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      ropes_course_activities {
        title
      }
      tags {
        name
      }

      drills {
        name
        description
        tags {
          name
        }
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
  }
`;

export default CustomArticle;
