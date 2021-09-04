import { Container, styled, Typography, withTheme } from "@material-ui/core";
import React from "react";

const PageContainer = styled(withTheme(Container))((props) => ({
  background: props.theme.palette.grey["100"],
}));

const Heading = styled(withTheme(Typography))((props) => ({
  margin: "30px auto",
  borderBottom: `3px solid ${props.theme.palette.primary.dark}`,
}));

const PageHeading = (props) => {
  return (
    <Heading gutterBottom={true} align="center" variant="h3">
      {props.title}
    </Heading>
  );
};

export default PageHeading;
