import { Container } from "@mui/material";
import React from "react";
import Layout from "~/components/Layout";
import SEO from "~/components/Seo";

const CalendarPage = () => {
  const seo = { title: "One Voice Basketball Schedule" };

  return (
    <Layout>
      <SEO seo={seo} />
      <Container style={{ margin: "30px auto" }}>
        <iframe
          title="OVB Calendar"
          style={{ width: "100%", border: 0 }}
          src="https://calendar.google.com/calendar/embed?src=trns2k1jteig8gpdp0ha5g9ur8%40group.calendar.google.com&ctz=America%2FNew_York"
          width="800"
          height="600"
          scrolling="no"
        />
      </Container>
    </Layout>
  );
};

export default CalendarPage;
