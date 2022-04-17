import { Container } from "@mui/material";
import React from "react";
import Layout from "~/components/layout";
import SEO from "~/components/seo";

const CalendarPage = ({ data }) => {

  const seo = { title: "One Voice Basketball Schedule" };

  return (
    <Layout>
      <SEO seo={seo} />
      <Container style={{margin: "30px auto"}} align="center">      
        <iframe style={{width: "100%"}} src="https://calendar.google.com/calendar/embed?src=trns2k1jteig8gpdp0ha5g9ur8%40group.calendar.google.com&ctz=America%2FNew_York" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </Container>
    </Layout>
  );
};

export default CalendarPage;
