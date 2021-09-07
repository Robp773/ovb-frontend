import { Container, Paper, styled, withTheme } from "@material-ui/core";
import React from "react";

const ArticleContainer = styled(withTheme(Container))((props) => ({
  background: props.theme.palette.grey["100"],
}));

const ContentContainer = styled(withTheme(Paper))((props) => ({
  minHeight: "50vh",
  maxWidth: "85ch",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  // alignItems: "center",
  background: "white",
  padding: "30px",
  margin: "auto",
  position: "relative",

  "& >* p": {
    margin: "0",
    width: "100%",
    padding: 0,
  },

  "& >* img": {
    margin: "0",
    width: "100%",
  },
}));

const ArticleWrapper = ({ children }) => {
  return (
    <ArticleContainer>
      <ContentContainer square={true}> {children}</ContentContainer>
    </ArticleContainer>
  );
};

export default ArticleWrapper;
