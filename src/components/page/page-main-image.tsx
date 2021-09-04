import { styled } from "@material-ui/core";
import Img from "gatsby-image";
import React from "react";

const MainImage = styled(Img)({
  marginBottom: "30px",
});

const PageImage = (props: any) => {
  return <MainImage fixed={props.image} />;
};

export default PageImage;
