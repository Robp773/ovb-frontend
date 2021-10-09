import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import CategoryHeading from "../../components/shared/category-heading";
import PageWrapper from "../../components/shared/content-wrapper";

const CustomArticle = (data) => {
  console.log(data);
  return (
    <Layout>
      <PageWrapper>TEST</PageWrapper>
    </Layout>
  );
};

// export const query = graphql`
//   query($category__name: String!) {
//     strapiArticle(category: {name: {eq: "Team"}}) {
//       id
//       tags {
//         name
//       }
//       title
//       date(formatString: "MMMM Do YYYY")
//     }
//   }
// `;

export default CustomArticle;
