import { Container, styled, Typography } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { getArticleIcon } from "../../helpers/getArticleIcon";

const HeadingContentContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
});

const StyledHeadingContainer = styled("div")({
  position: "relative",
});

const CategoryHeading = ({ categoryData }) => {
  return (
    <StyledHeadingContainer>
      <GatsbyImage
        alt="Category image"
        image={
          categoryData.main_media.localFile.childImageSharp.gatsbyImageData
        }
      />
      <HeadingContentContainer>
        <Typography variant="h4">{categoryData.name}</Typography>
        {getArticleIcon(categoryData.name)}
      </HeadingContentContainer>
    </StyledHeadingContainer>
  );
};

export default CategoryHeading;
