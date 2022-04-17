import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { Typography } from "@mui/material";
import ContentWrapper from "../../components/shared/content-wrapper";
import ConstructionIcon from "@mui/icons-material/Construction";
const CalendarPage = ({ data }) => {
  const seo = { title: "Store" };

  return (
    <Layout>
      <SEO seo={seo} />
      <ContentWrapper>
        <Typography style={{ margin: "0 auto" }} variant="h4">
          Under construction
        </Typography>
        <ConstructionIcon style={{ fontSize: "150px", margin: "auto" }} />
      </ContentWrapper>
    </Layout>
  );
};

export default CalendarPage;
