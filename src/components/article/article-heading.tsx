import {
  Box,
  Card,
  Chip,
  Container,
  Divider,
  Paper,
  styled,
  Typography,
  withTheme,
} from "@material-ui/core";
import React from "react";
import ArticleCategoryChip from "./article-category-chip";
import ArticleImage from "./article-main-image";

const ArticleContainer = styled(withTheme(Container))((props) => ({
  background: props.theme.palette.grey["100"],
}));

const Heading = styled(withTheme(Paper))((props) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // padding: "1px",
  height: "fit-content",
  marginBottom: "10px",
  // background: props.theme.palette.secondary.main,
  // border: "1px solid gray"
}));

const HeadingContentBox = styled(Box)({
  padding: "10px 0",
  display: "flex",
  // alignItems: "center",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  height: "100%",
  width: "35%",
});

const TagListBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  padding: "10px 0",
});

const ArticleHeading = (props, data) => {
  console.log("Article heading data", data);
  return (
    <Heading   elevation={0}>
      <HeadingContentBox>
        <Typography align="center" variant="h5">
          {props.title}
        </Typography>
        <Typography align="center" gutterBottom={true} variant="subtitle1">
          {props.metaData.date}
        </Typography>
        <TagListBox>
          <ArticleCategoryChip category={props.metaData.category} />
          {props.metaData.tags.map((tag, index) => {
            return (
              <Chip
                clickable
                size="small"
                key={`category-${index}`}
                color="secondary"
                label={`${tag.name}`}
                style={{ marginBottom: "3px" }}
              />
            );
          })}
        </TagListBox>
      </HeadingContentBox>
      <ArticleImage image={props.image} />
    </Heading>
  );
};

export default ArticleHeading;
