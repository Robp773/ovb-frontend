import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import PageWrapper from "../../components/shared/content-wrapper";

const CustomArticle = (data) => {
  console.log(data);
  return (
    <Layout>
      <PageWrapper> ropes course activities page</PageWrapper>
    </Layout>
  );
};

// export const query = graphql`
//   query($category__name: String!) {
//     strapiArticleCategory(name: { eq: $category__name }) {
//       name
//       description
//       main_media {
//         localFile {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default CustomArticle;
