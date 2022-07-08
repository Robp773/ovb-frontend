import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import ArticleCategoryChip from "../article/article-category-chip";
import DrillCategoryChip from "../drill/drill-category-chip";
import ContentChip from "./content-chip";
import ContentImage from "./content-main-image";
import ChapterCategoryChip from "../drill/chapter-category-chip";

const Heading = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "fit-content",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

const HeadingContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  margin: "auto",
  height: "100%",
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const TagListBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "10px 0",
});

const TitleText = styled("span")(({ theme }) => ({
  // borderBottom: `3px solid ${theme.palette.primary.main}`,
}));

const BreadCrumbsWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  padding: "5px 10px",
  display: "flex",
  alignItems: "center",
  // zIndex: 999,
  width: "100%",
  // background: theme.palette.common.white,
}));

const StyledLink = styled(GatsbyLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.secondary.main,

  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const StyledCategoryHeader = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginTop: "20px",
  },
}));

const StyledNavIcon = styled(NavigateNextIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const CategoryChipWrapper = styled("div")({
  width: "100%",
  textAlign: "center",

  "& > svg": {
    width: "125px",
    height: "50px",
  },
});

const ContentHeading = (props, data) => {
  let CategoryChip;

  const { metaData } = props;

  const pathList = metaData.pathname
    ? metaData.pathname
        .split("/")
        .splice(1, metaData.pathname.split("/").length)
    : [];

  switch (props.contentType) {
    case "article": {
      CategoryChip = (
        <ArticleCategoryChip
          category={metaData.category}
          iconWithText={props.iconWithText}
        />
      );
      break;
    }
    case "drill": {
      CategoryChip = <DrillCategoryChip category={metaData.category} />;
      break;
    }
    case "chapter": {
      CategoryChip = <ChapterCategoryChip category={metaData.category} />;
      break;
    }
  }
  return (
    <Heading>
      {props.contentType === "activity" ||
      props.contentType === "chapter" ? null : (
        <BreadCrumbsWrapper>
          {pathList.map((link, index) => {
            return (
              <div
                style={{ display: "flex", alignItems: "center" }}
                key={index}
              >
                {index === 0 ? null : <StyledNavIcon />}
                <StyledLink to={`/${pathList.slice(0, index + 1).join("/")}`}>
                  <Typography
                    style={{
                      display: "inline-block",
                      fontWeight: `${
                        index + 1 === pathList.length ? "normal" : "bold"
                      }`,
                    }}
                    variant="subtitle2"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Typography>
                </StyledLink>
              </div>
            );
          })}
        </BreadCrumbsWrapper>
      )}

      <HeadingContentBox>
        <StyledCategoryHeader align="center" variant="h4">
          <TitleText>{props.title}</TitleText>
        </StyledCategoryHeader>

        <Typography align="center" gutterBottom={true} variant="subtitle1">
          {metaData.date}
        </Typography>
        <TagListBox>
          <CategoryChipWrapper>{CategoryChip}</CategoryChipWrapper>
          {metaData.tags.map((tag, index) => {
            return (
              <ContentChip
                // color="secondary"
                key={`category-${index}`}
                name={tag.name}
              />
            );
          })}
        </TagListBox>
      </HeadingContentBox>
      {props.image ? (
        <ContentImage alt={props.title} image={props.image} />
      ) : null}
    </Heading>
  );
};

export default ContentHeading;
