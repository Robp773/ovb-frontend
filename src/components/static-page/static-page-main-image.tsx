import { styled } from "@mui/material";
import Img from "gatsby-image";
import React from "react";

const MainImage = styled(Img)({
  marginBottom: "30px",
  height: "300px",

});

const StaticPageImage = (props: any) => {
  return <MainImage fluid={props.image} />;
};

export default StaticPageImage;
