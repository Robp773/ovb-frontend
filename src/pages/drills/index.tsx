import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { Typography } from "@material-ui/core";

const CalendarPage = ({ data }) => {
  console.log(data);
  const seo = { title: "Drills" };

  return (
    <Layout>
      <SEO seo={seo} />
      <div>DRILLS</div>
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
