import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const ContentImage = (props: any) => {
  return <GatsbyImage image={props.image} />;
};

export default ContentImage;
