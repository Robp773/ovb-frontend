import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { Typography } from "@mui/material";

const CalendarPage = ({ data }) => {
  
  const seo = { title: "Store" };

  return (
    <Layout>
      <SEO seo={seo} />
      <div>STORE</div>
    </Layout>
  );
};

// export const notePageQuery = graphql`
//   query CalendarPageQuery {
//     strapiCalendarPage {
//       id
//       content
//       title
//     }
//   }
// `;

export default CalendarPage;
