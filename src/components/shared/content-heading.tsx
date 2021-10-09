import {
  Box,
  Breadcrumbs,
  Button,
  Paper,
  styled,
  Typography,
  withTheme,
} from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import ArticleCategoryChip from "../article/article-category-chip";
import DrillCategoryChip from "../drill/drill-category-chip";
import ContentChip from "./content-chip";
import ContentImage from "./content-main-image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Heading = styled(withTheme(Paper))((props) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // padding: "1px",
  height: "fit-content",
  // background: props.theme.palette.secondary.main,
  // border: "1px solid gray"
  marginBottom: "20px",
}));

const HeadingContentBox = styled(Box)({
  padding: "10px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  margin: "auto",
  height: "100%",
  // width: "35%",
});

const TagListBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "10px 0",
});

const BreadCrumbsWrapper = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  padding: "5px 20px",
  display: "flex",
  alignItems: "center",
});

const StyledLink = styled(withTheme(GatsbyLink))((props) => ({
  textDecoration: "none",
  color: props.theme.palette.secondary.main,

  "&:hover": {
    color: props.theme.palette.primary.main,
  },
}));

const StyledNavIcon = styled(withTheme(NavigateNextIcon))((props) => ({
  color: props.theme.palette.secondary.main,
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
    .split("/")
    .splice(1, metaData.pathname.split("/").length);

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
  }
  return (
    <Heading elevation={0}>
      <BreadCrumbsWrapper>
        {pathList.map((link, index) => {
          return (
            <>
              {index === 0 ? null : <StyledNavIcon />}
              <StyledLink
                to={`${process.env.GATSBY_BASE_URL}/${pathList
                  .slice(0, index + 1)
                  .join("/")}`}
              >
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
            </>
          );
        })}
      </BreadCrumbsWrapper>
      <HeadingContentBox>
        <Typography align="center" variant="h3">
          {props.title}
        </Typography>
        <Typography align="center" gutterBottom={true} variant="subtitle1">
          {metaData.date}
        </Typography>
        <TagListBox>
          <CategoryChipWrapper>{CategoryChip}</CategoryChipWrapper>
          {metaData.tags.map((tag, index) => {
            return <ContentChip key={`category-${index}`} name={tag.name} />;
          })}
        </TagListBox>
      </HeadingContentBox>
      {props.image ? <ContentImage image={props.image} /> : null}
    </Heading>
  );
};

export default ContentHeading;
