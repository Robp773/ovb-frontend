import { Container, styled, Typography, withTheme } from "@material-ui/core";
import React from "react";
import Img from "gatsby-image";
import ArticleCategoryChip from "../article/article-category-chip";
import { getArticleIcon } from "../../helpers/getArticleChip";

const StyledImage = styled(Img)({
  //   height: "250px",
});

const HeadingContentContainer = styled(withTheme(Container))((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center", 
}));

const StyledHeadingContainer = styled("div")({
  position: "relative",
});

const CategoryHeading = ({ categoryData }) => {
  console.log(categoryData);

  return (
    <StyledHeadingContainer>
      <StyledImage
        fluid={categoryData.main_media.localFile.childImageSharp.fluid}
      />
      <HeadingContentContainer>
        <Typography variant="h4">{categoryData.name}</Typography>
        {getArticleIcon(categoryData.name)}
      </HeadingContentContainer>
    </StyledHeadingContainer>
  );
};

export default CategoryHeading;
