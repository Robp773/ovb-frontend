import { styled } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";

const HeadingTitle = styled(Typography)(({ theme }) => ({
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  textAlign: "center",
  width: "fit-content",
  margin: "0 auto 20px auto",
}));

const StaticPageNoImageHeading = (props, data) => {
  return (
    <HeadingTitle gutterBottom align="center" variant="h3">
      {props.title}
    </HeadingTitle>
  );
};

export default StaticPageNoImageHeading;
