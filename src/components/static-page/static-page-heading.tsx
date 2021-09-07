import {
  Box,
  Card,
  Chip,
  Container,
  styled,
  Typography,
  withTheme,
} from "@material-ui/core";
import React from "react";
import PageImage from "./static-page-main-image";

const Heading = styled(withTheme(Box))((props) => ({}));

const HeadingTitle = styled(withTheme(Typography))((props) => ({
  borderBottom: `3px solid ${props.theme.palette.primary.main}`,
  width: "fit-content",
  margin: "0 auto 10px auto"
}));

const StaticPageHeading = (props, data) => {
  console.log("Page heading data", data);
  return (
    <Heading>
      <HeadingTitle gutterBottom={true} align="center" variant="h4">
        {props.title}
      </HeadingTitle>
      <PageImage image={props.image} />
    </Heading>
  );
};

export default StaticPageHeading;
