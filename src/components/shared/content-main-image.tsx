import { styled } from "@material-ui/core";
import Img from "gatsby-image";
import React from "react";

const MainImage = styled(Img)({
  width: "60%",
  height: "300px",
});

const ContentImage = (props: any) => {
  return <MainImage fluid={props.image} />;
};

export default ContentImage;
