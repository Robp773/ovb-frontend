import { styled, withTheme } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "~/components/layout";

const ReferencesAccordion = styled(Accordion)({
  marginTop: "30px",
});

const StyledSummary = styled(withTheme(AccordionSummary))((props) => ({
  background: props.theme.palette.grey[100],
  // color: props.theme.palette.common.white,
}));

const CardActionButton = styled(Link)({
  textDecoration: "none",
});

const CustomArticle = ({ data }) => {
  return (
    <Layout>
      {/* <SEO seo={seo} /> */}

      <h1>Ropes Course Activity Page</h1>
    </Layout>
  );
};

export const query = graphql`
  {
    strapiDrill {
      description
      name
    }
  }
`;

export default CustomArticle;
