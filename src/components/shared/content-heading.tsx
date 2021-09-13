import {
  Box,
  Container,
  Divider,
  Paper,
  styled,
  Typography,
  withTheme,
} from "@material-ui/core";
import React from "react";
import DrillCategoryChip from "../drill/drill-category-chip";
import ContentChip from "./content-chip";

import ContentImage from "./content-main-image";
import ArticleCategoryChip from "../article/article-category-chip";


const Heading = styled(withTheme(Paper))((props) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // padding: "1px",
  height: "fit-content",
  // background: props.theme.palette.secondary.main,
  // border: "1px solid gray"
  marginBottom: "20px"
}));

const HeadingContentBox = styled(Box)({
  padding: "10px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
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

const ContentHeading = (props, data) => {
  let CategoryChip;
  switch (props.contentType) {
    case "article": {
      CategoryChip = <ArticleCategoryChip category={props.metaData.category} />;
      break;
    }
    case "drill": {
      CategoryChip = <DrillCategoryChip category={props.metaData.category} />;
      break;
    }
  }
  return (

    <Heading elevation={0}>
 
      <HeadingContentBox>
        <Typography align="center" variant="h5">
          {props.title}
        </Typography>
        <Typography align="center" gutterBottom={true} variant="subtitle1">
          {props.metaData.date}
        </Typography>
        <TagListBox>
        <div style={{width: "100%", textAlign: "center"}}>  {CategoryChip} </div>
          {props.metaData.tags.map((tag, index) => {
            return <ContentChip key={`category-${index}`} name={tag.name} />;
          })}
        </TagListBox>
      </HeadingContentBox>
      {props.image ? <ContentImage image={props.image} /> : null }

    </Heading>     

  );
};

export default ContentHeading;
