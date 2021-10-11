import { styled } from "@material-ui/core";
import Img from "gatsby-image";
import React from "react";

const MainImage = styled(Img)({
  height: "300px",
});

const ContentImage = (props: any) => {
  return <MainImage fixed={props.image} />;
};

export default ContentImage;
