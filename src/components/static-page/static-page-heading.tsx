import {
  Box,
  styled,
} from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";

import PageImage from "./static-page-main-image";

const Heading = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
}));

const HeadingTitle = styled(Typography)(({ theme }) => ({
  margin: "auto !important",
  width: "50%"
}));

const TitleText = styled("span")(({ theme }) => ({
  borderBottom: `3px solid ${theme.palette.primary.main}`,
}))

const StaticPageHeading = (props, data) => {
  return (
    <Heading>
      <HeadingTitle gutterBottom align="center" variant="h4">
        <TitleText>{props.title}</TitleText>
      </HeadingTitle>
      <PageImage image={props.image} />
    </Heading>
  );
};

export default StaticPageHeading;
