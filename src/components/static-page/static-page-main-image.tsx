import { styled } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const MainImage = styled(GatsbyImage)({
  margin: "30px auto !important",
});

const StaticPageImage = (props: any) => {
  return <MainImage image={props.image} />;
};

export default StaticPageImage;
