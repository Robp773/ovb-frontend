import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageWrapper from "../components/Page/page-wrapper";
import PageHeading from "../components/Page/page-heading";
import PageImage from "../components/Page/page-main-image";
export default function Note({ data }) {
  console.log(data);
  return (
    <Layout>
      <PageWrapper>
        <PageHeading title="test" />
      </PageWrapper>
    </Layout>
  );
}
export const query = graphql`
  query {
    strapiNote(strapiId: { eq: 1 }) {
      category
      title
      date(fromNow: false)
      description
      content
      ropes_course_activities {
        title
      }
      main_media {
        localFile {
          childImageSharp {
            fixed {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
      drills {
        name
        tags {
          name
        }
        main_media {
          localFile {
            childImageSharp {
              fixed {
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
  }
`;

// query MyQuery {
//
// }
